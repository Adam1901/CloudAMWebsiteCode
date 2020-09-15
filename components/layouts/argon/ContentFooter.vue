<template>
  <footer class="footer px-4 mx-2">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{year}} CloudAM, <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank" rel="noopener">Creative Tim</a> &
          <a href="https://www.binarcode.com?ref=creative-tim" class="font-weight-bold ml-1" target="_blank" rel="noopener">Binar Code</a>
        </div>
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          <li class="nav-item">
            <a href="https://www.creative-tim.com" class="nav-link" target="_blank" rel="noopener">Creative Tim</a>
          </li>
          <li class="nav-item">
            <a href="https://www.github.com/adam1901" class="nav-link" target="_blank" rel="noopener">Github</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
