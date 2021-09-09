<template>
  <!-- start TL Booking form script -->
  <div id="tl-booking-form">&nbsp;</div>
</template>

<script>
export default {
  mounted() {
    let locale = this.$i18n.locale;
    if (locale === "uz") {
      locale = "ru";
    }
    if (process.browser) {
      var q = [
        ["setContext", "TL-INT-navruzhotel-uz", locale],
        [
          "embed",
          "booking-form",
          {
            container: "tl-booking-form",
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
    }
  },
};
</script>