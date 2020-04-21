import Ember from "ember";

export default Ember.Component.extend({
  label: "",
  tagName: null,
  target: null,
  offset: 0,
  duration: 500,
  didInsertElement() {
    const self = this;

    document.querySelector(`#${this.get("elementId")}`)
      .addEventListener("click", function () {
        self.scrollToTarget();
      });
  },

  scrollToTarget() {
    const target = this.get("target");
    const offset = this.get("offset");
    const duration = this.get("duration");

    if (!target) {
      Ember.Logger.error("Target should be passed");
      return;
    }

    const targetPos = document.querySelector(target).offsetTop + offset;

    this.animateScroll(targetPos, duration)
  },

  animateScroll(targetPos, duration) {
    const self = this;
    const startPos = window.scrollY;
    const speed = 20;
    let time = 0;
    const animate = function () {
      time += speed;
      window.scrollTo(0, self.getAnimationPos(time, startPos, targetPos - startPos, duration));
      if (time < duration) {
        setTimeout(animate, speed);
      }
    };
    animate();
  },

  getAnimationPos(time, startPos, endPos, duration) {
    time /= duration / 2;
    if (time < 1) {
      return endPos / 2 * time * time + startPos;
    }
    time--;
    return -endPos / 2 * (time * (time - 2) - 1) + startPos;
  }
});
