<template>
  <div class="b-upload">
    <div class="b-upload__trigger" @click="handleClick">
      <slot name="trigger"></slot>
    </div>
    <div class="b-upload__submit">
      <slot name="submit"></slot>
    </div>
    <div class="b-upload__tip">
      <slot name="tip"></slot>
    </div>
    <input class="b-upload__input" type="file" ref="input" name={name} @change="handleChange" multiple={multiple} accept={accept}/>
    <upload-list
      :files="uploadedFiles"
      @remove="handleRemove">
    </upload-list>
  </div>
</template>

<script>
import ajax from './ajax'
import UploadList from './UploadList'

export default {
  name: 'BUpload',
  components: {
    UploadList
  },
  data () {
    return {
      uploadedFiles: [],
      tempIndex: 1
    }
  },
  props: {
    type: String,
    action: {
      type: String,
      required: true
    },
    data: Object,
    fileList: {
      type: Array,
      default () {
        return []
      }
    },
    headers: Object,
    withCredentials: Boolean,
    name: {
      type: String,
      default: 'file'
    },
    httpRequest: {
      type: Function,
      default: ajax
    }
  },
  watch: {
    fileList: {
      immediate: true,
      handler: function (fileList) {
        this.uploadedFiles = fileList.map(item => {
          item.uid = item.uid || (Date.now() + this.tempIndex++)
          item.status = item.status || 'success'
          return item
        })
      }
    }
  },
  methods: {
    handleClick () {
      this.$refs.input.value = null
      this.$refs.input.click()
    },
    handleRemove (file) {
      let fileList = this.uploadedFiles
      fileList.splice(fileList.indexOf(file), 1)
      this.onRemove(file, fileList)
    },
    handleChange (ev) {
      const files = ev.target.files
      if (!files) return
      this.uploadFiles(files)
    },
    onStart (rawFile) {
      console.log('onStart', rawFile)
      rawFile.uid = Date.now() + this.tempIndex++
      let file = {
        status: 'ready',
        name: rawFile.name,
        type: rawFile.type,
        size: rawFile.size,
        percentage: 0,
        uid: rawFile.uid,
        raw: rawFile
      }

      try {
        file.url = URL.createObjectURL(rawFile)
      } catch (err) {
        console.error(err)
        return
      }

      this.uploadedFiles.push(file)
      this.onChange(file, this.uploadedFiles)
    },
    onRemove (rawFile) {
      console.log('onRemove', rawFile)
    },
    onChange (file, uploadedFiles) {
      console.log('onChange', file, uploadedFiles)
      const urlList = uploadedFiles.map(item => item.url)
      this.$emit('input', urlList)
    },
    uploadFiles (files) {
      console.log('uploadFiles', files)
      let postFiles = Array.prototype.slice.call(files)

      if (postFiles.length === 0) return

      postFiles.forEach(rawFile => {
        this.onStart(rawFile)
        if (this.autoUpload) this.upload(rawFile)
      })
    },
    upload (rawFile) {
      console.log('upload', rawFile)
      this.$refs.input.value = null
      if (!this.beforeUpload) {
        return this.post(rawFile)
      }

      const before = this.beforeUpload(rawFile)
      if (before && before.then) {
        before.then(processedFile => {
          const fileType = Object.prototype.toString.call(processedFile)
          console.log('fileType', fileType)
        }, () => {
          this.onRemove(null, rawFile)
        })
      } else if (before !== false){
        this.post(rawFile)
      } else {
        this.onRemove(null, rawFile)
      }
    },
    beforeUpload(rawFile) {
      console.log('beforeUpload', rawFile)
    },
    post (rawFile) {
      console.log('post', rawFile)
      const { uid } = rawFile
      console.log('uid', uid)
      const options = {
        headers: this.header,
        withCredentials: this.withCredentials,
        file: rawFile,
        data: this.data,
        filename: this.name,
        action: this.action,
        // onProgress: e => {
        //   this.onProgress(e, rawFile)
        // },
        // onSuccess: res => {
        //   this.onSuccess(res, rawFile);
        //   delete this.reqs[uid];
        // },
        // onError: err => {
        //   this.onError(err, rawFile);
        //   delete this.reqs[uid];
        // }
      }
      const req = this.httpRequest(options)
    }
  }
}
</script>

<style lang="stylus" scoped>
.b-upload
  flex 1
  text-align left
.b-upload__trigger, .b-upload__submit
  margin-right 20px
  display inline-block
.b-upload__input
  display none
.b-upload__tip
  margin-top 8px
  font-size 12px
  text-align left
</style>

