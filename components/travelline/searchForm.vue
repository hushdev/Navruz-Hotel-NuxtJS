<template>
  <div id="block-search" class="container">
    <div id="tl-search-form" class="tl-container">
      <a href="https://travelline.pro/ " rel="nofollow">система онлайн-бронирования</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["locale"],
  mounted() {
    let locale = this.locale;
    if (locale === "uz") {
      locale = "ru";
    }
    // if (process.browser) {
      var q = [
        ["setContext", "TL-INT-navruzhotel-uz", locale],
        [
          "embed",
          "search-form",
          {
            container: "tl-search-form",
          },
        ],
      ];
      var t = (window.travelline = window.travelline || {}),
        ti = (t.integration = t.integration || {});
      ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;
      if (!ti.__loader) {
        ti.__loader = true;
        var d = window.document,
          p = d.location.protocol,
          s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src =
          (p == "https:" ? p : "http:") +
          "//ibe.tlintegration.com/integration/loader.js";
        (
          d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0]
        ).appendChild(s);
      }
    // }
  },
};
</script>

<style lang="scss">
#block-search {
  background-color: #ffffff;
  box-shadow: 0px 5px 29px rgba(97, 97, 97, 0.25) !important;
  width: 100%;
  box-sizing: border-box;
  z-index: 9;
  border-radius: 15px;
  overflow: hidden;
}
.tl-container {
  padding: 0 22px;
}
</style>