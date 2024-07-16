<template>
  <form
    enctype="multipart/form-data"
    method="post"
    action="https://www.imgurl.org/api/v2/upload"
    id="upform"
  >
    <input
      type="text"
      name="uid"
      value="69725009da0618599d1292a14cc61198"
    />
    <input
      type="text"
      name="token"
      value="e0356b167e3a0088501158ecad2acd1c"
    />
    <input type="file" name="file" />
    <input type="submit" id="btn" value="开始上传" class="btn" />
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#upform {
  padding-top: 200px;
}
</style>