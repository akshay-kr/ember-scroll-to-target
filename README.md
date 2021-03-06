# ember-scroll-to-target [![Build Status](https://travis-ci.org/akshay-kr/ember-scroll-to-target.svg?branch=master)](https://travis-ci.org/akshay-kr/ember-scroll-to-target)

Easy animated scrolling to target element.

## **Install**

    ember install ember-scroll-to-target

## **Usage**

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

## Demo

Visit below ember twiddle for working demo.

https://ember-twiddle.com/21bb3d46c665718d8b78b5c036ad6529

## Tests

    cd tests/dummy
    ember server
    Open http://localhost:4200/tests
