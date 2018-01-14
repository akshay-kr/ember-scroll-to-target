import Ember from "ember";

export default Ember.Component.extend({
  label: "",
  tagName: null,
  target: null,
  offset: 0,
  duration: 500,
  didInsertElement() {
    const self = this;
    const target = this.get("target");
    const offset = this.get("offset");
    const duration = this.get("duration");
    if (!target) {
      Ember.Logger.error("Target should be passed");
      return;
    }
    $(`#${this.get("elementId")}`).on("click", () => {
      self.scrollToTarget(target, offset, duration);
    });
  },

  scrollToTarget(target, offset, duration) {
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top + offset
      },
      duration
    );
  }
});
