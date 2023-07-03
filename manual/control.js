let app = new Vue({
  el: "#manual-app",
  data: {
    nav,
    show_nav: false,
    navState: 'interface-overview',
    docs
  },
  watch: {
    navState: function (newState, oldState) {
      let parent;
      this.nav.forEach((n) => {
        if (n.state === newState) {
          n.active = true;
          parent = n.parent;
        }
        else { n.active = false; }
      });
      this.nav.forEach((n) => {
        if (n.state === parent) n.active = true;
      });

    }
  },
  methods: {
    setState: function (st) {
      this.navState = st;
    },
    toggleNav: function() {
      this.show_nav = !this.show_nav;
    }
  },
  mounted: function () {
    // 1. routing
    let url = window.location.href;
    let hash = url.match(/#.+$/gi);
    if (hash?.[0]) {
      let state = hash[0].replace("#", "");
      this.setState(state);
    }
  }
})

