# ember-scroll-to-target

Easy animated scrolling to target element.

## **Install**

---

    ember install ember-scroll-to-target

## **Usage**

---

With `label` attribute:

```hbs
{{scroll-to
 label='Click to scroll'
 target='#targetId'
 tagName='a'
 duration=1000
}}
```

With template block:

```hbs
{{#scroll-to
 target='#targetId'
 tagName='a'
 duration=1000
}}
  Click to scroll
{{/scroll-to}}
```

#### **Attributes**

| Attribute | Defination                                                                              |
| --------- | --------------------------------------------------------------------------------------- |
| label     | Text displayed inside the component. Not required if block template is used. (Optional) |
| target    | Target element id. (Required)                                                           |
| tagname   | Tagname for the component template. (Optional)                                          |
| duration  | Scroll animation duration. Default is 500. (Optional)                                   |
| offset    | Additional offset if required. (Optional)                                               |
