import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent("scroll-to", "Integration | Component | scroll-to", {
  integration: true
});

test("it renders", function(assert) {
  function scrollToTarget() {
    assert.ok(true, "scrollToTarget called once");
  }
  this.setProperties({
    target: "#id",
    label: "Click to scroll",
    tagName: "a",
    scrollToTarget: scrollToTarget
  });
  this.render(
    hbs`{{scroll-to label=label target=target tagName=tagName scrollToTarget=scrollToTarget}}`
  );
  assert.ok(this.$("a").length, "it renders");
  assert.equal(
    this.$("a")
      .text()
      .trim(),
    "Click to scroll",
    "Label is rendered"
  );

  this.$("a").click();
});
