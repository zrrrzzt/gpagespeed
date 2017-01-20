[![Build Status](https://travis-ci.org/zrrrzzt/gpagespeed.svg?branch=master)](https://travis-ci.org/zrrrzzt/gpagespeed)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# gpagespeed

Node.js module for analyzing a webpage with [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

You must acquire an API key from [Google Developers Console](https://console.developers.google.com/).

Supports promises and callback interface.

## Installation

From npm

```bash
$ npm i gpagespeed --save
```

## Usage

Pass an object with properties.

**url** and **key** are required, all other are optional.

You can see a list of all alternatives on the page for [Google PageSpeed standard query parameters](https://developers.google.com/speed/docs/insights/v2/reference/pagespeedapi/runpagespeed).

### Promises

```JavaScript
const pagespeed = require('gpagespeed')
const options = {
  url: 'http://url-to-check',
  key: 'insert-your-key'
}

pagespeed(options)
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
```

### Callback

```JavaScript
const pagespeed = require('gpagespeed')
const options = {
  url: 'http://url-to-check',
  key: 'insert-your-key'
}

pagespeed(options, (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

## Alternative api

In addition you can choose to use https instead of googleapis and another version of the PageSpeed api (defaults to v2).

### Promises
```JavaScript
const pagespeed = require('gpagespeed')
const options = {
  url: 'http://url-to-check',
  key: 'insert-your-key',
  useweb: true,
  apiversion: 'v3beta1'
}

pagespeed(options)
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
```

### Callback
```JavaScript
const pagespeed = require('gpagespeed')
const options = {
  url: 'http://url-to-check',
  key: 'insert-your-key',
  useweb: true,
  apiversion: 'v3beta1'
}

pagespeed(options, (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

## Returns

```JavaScript
{
  "captchaResult": "CAPTCHA_NOT_NEEDED",
  "kind": "pagespeedonline#result",
  "id": "https://www.npmjs.com/",
  "responseCode": 200,
  "title": "npm",
  "ruleGroups": {
    "SPEED": {
      "score": 70
    }
  },
  "pageStats": {
    "numberResources": 50,
    "numberHosts": 15,
    "totalRequestBytes": "4652",
    "numberStaticResources": 31,
    "htmlResponseBytes": "570573",
    "overTheWireResponeBytes": "2244324",
    "cssResponseBytes": "316271",
    "imageResponseBytes": "557960",
    "javascriptResponseBytes": "550906",
    "otherResponseBytes": "129213",
    "numberJsResources": 8,
    "numberCssResources": 2
  },
  "formattedResults": {
    "locale": "en_US",
    "ruleResults": {
      "AvoidLandingPageRedirects": {
        "localizedRuleName": "Avoid landing page redirects",
        "ruleImpact": 0,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Your page has no redirects. Learn more about {{BEGIN_LINK}}avoiding landing page redirects{{END_LINK}}.",
          "args": [
            {
              "type": "HYPERLINK",
              "key": "LINK",
              "value": "https://developers.google.com/speed/docs/insights/AvoidRedirects"
            }
          ]
        }
      },
      "EnableGzipCompression": {
        "localizedRuleName": "Enable compression",
        "ruleImpact": 0,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "You have compression enabled. Learn more about {{BEGIN_LINK}}enabling compression{{END_LINK}}.",
          "args": [
            {
              "type": "HYPERLINK",
              "key": "LINK",
              "value": "https://developers.google.com/speed/docs/insights/EnableCompression"
            }
          ]
        }
      },
      "LeverageBrowserCaching": {
        "localizedRuleName": "Leverage browser caching",
        "ruleImpact": 11.361140873015875,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Setting an expiry date or a maximum age in the HTTP headers for static resources instructs the browser to load previously downloaded resources from local disk rather than over the network."
        },
        "urlBlocks": [
          {
            "header": {
              "format": "{{BEGIN_LINK}}Leverage browser caching{{END_LINK}} for the following cacheable resources:",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/LeverageBrowserCaching"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "{{URL}} (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://partners.npmjs.com/hiring"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://cdn.optimizely.com/js/3318080746.js"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "2.1 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "5 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/css/@npmcorp/pui-css-typography/OpenSans-Bold-webfont.woff"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/css/@npmcorp/pui-css-typography/OpenSans-ExtraBold-webfont.woff"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/css/@npmcorp/pui-css-typography/OpenSans-Light-webfont.woff"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/css/@npmcorp/pui-css-typography/OpenSans-Regular-webfont.woff"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/css/@npmcorp/pui-css-typography/OpenSans-Semibold-webfont.woff"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/css/components.css?last-changed=557628d0dd3d70f924b73f62b93c5859"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/images/avatars/Avatar1.svg"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/images/avatars/Avatar2.svg"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/images/avatars/Avatar4.svg"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/images/binoculars-dot.svg"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/images/collaboration-security.svg"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/images/hero-cityscape.svg"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/images/mountain-dot.svg"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/images/npm-enterprise.svg"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/images/npm-is-BOXES.svg"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/images/rucksack-dot.svg"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/js/componentized.min.js?last-changed=33a73092bc70d0308c9370b146871fef"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/js/vendor.min.js?last-changed=1d4a4436c0b4dcadb967d94da68ac9f5"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.google-analytics.com/plugins/ua/ec.js"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "60 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}} ({{LIFETIME}})",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.google-analytics.com/analytics.js"
                    },
                    {
                      "type": "DURATION",
                      "key": "LIFETIME",
                      "value": "2 hours"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "MainResourceServerResponseTime": {
        "localizedRuleName": "Reduce server response time",
        "ruleImpact": 7.5,
        "groups": [
          "SPEED"
        ],
        "urlBlocks": [
          {
            "header": {
              "format": "In our test, your server responded in {{RESPONSE_TIME}}. There are many factors that can slow down your server response time. {{BEGIN_LINK}}Please read our recommendations{{END_LINK}} to learn how you can monitor and measure where your server is spending the most time.",
              "args": [
                {
                  "type": "DURATION",
                  "key": "RESPONSE_TIME",
                  "value": "0.95 seconds"
                },
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/Server"
                }
              ]
            }
          }
        ]
      },
      "MinifyCss": {
        "localizedRuleName": "Minify CSS",
        "ruleImpact": 0,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Your CSS is minified. Learn more about {{BEGIN_LINK}}minifying CSS{{END_LINK}}.",
          "args": [
            {
              "type": "HYPERLINK",
              "key": "LINK",
              "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
            }
          ]
        }
      },
      "MinifyHTML": {
        "localizedRuleName": "Minify HTML",
        "ruleImpact": 0,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Your HTML is minified. Learn more about {{BEGIN_LINK}}minifying HTML{{END_LINK}}.",
          "args": [
            {
              "type": "HYPERLINK",
              "key": "LINK",
              "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
            }
          ]
        }
      },
      "MinifyJavaScript": {
        "localizedRuleName": "Minify JavaScript",
        "ruleImpact": 0,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Your JavaScript content is minified. Learn more about {{BEGIN_LINK}}minifying JavaScript{{END_LINK}}.",
          "args": [
            {
              "type": "HYPERLINK",
              "key": "LINK",
              "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
            }
          ]
        }
      },
      "MinimizeRenderBlockingResources": {
        "localizedRuleName": "Eliminate render-blocking JavaScript and CSS in above-the-fold content",
        "ruleImpact": 10,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Your page has {{NUM_SCRIPTS}} blocking script resources and {{NUM_CSS}} blocking CSS resources. This causes a delay in rendering your page.",
          "args": [
            {
              "type": "INT_LITERAL",
              "key": "NUM_SCRIPTS",
              "value": "1"
            },
            {
              "type": "INT_LITERAL",
              "key": "NUM_CSS",
              "value": "2"
            }
          ]
        },
        "urlBlocks": [
          {
            "header": {
              "format": "None of the above-the-fold content on your page could be rendered without waiting for the following resources to load. Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML."
            }
          },
          {
            "header": {
              "format": "{{BEGIN_LINK}}Remove render-blocking JavaScript{{END_LINK}}:",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/BlockingJS"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/js/componentized.min.js?last-changed=33a73092bc70d0308c9370b146871fef"
                    }
                  ]
                }
              }
            ]
          },
          {
            "header": {
              "format": "{{BEGIN_LINK}}Optimize CSS Delivery{{END_LINK}} of the following:",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.npmjs.com/static/css/components.css?last-changed=557628d0dd3d70f924b73f62b93c5859"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "{{URL}}",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "OptimizeImages": {
        "localizedRuleName": "Optimize images",
        "ruleImpact": 14.8882,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Properly formatting and compressing images can save many bytes of data."
        },
        "urlBlocks": [
          {
            "header": {
              "format": "{{BEGIN_LINK}}Optimize the following images{{END_LINK}} to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/OptimizeImages"
                },
                {
                  "type": "BYTES",
                  "key": "SIZE_IN_BYTES",
                  "value": "145.4KiB"
                },
                {
                  "type": "PERCENTAGE",
                  "key": "PERCENTAGE",
                  "value": "89%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://i.cloudup.com/Ka0R3QvWRs.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "85.9KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "95%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://i.cloudup.com/bDkmXyEmr5.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "32.9KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "88%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "12.2KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "76%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://cldup.com/wpGXm1cWwB.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "11.9KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "97%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/1647/small/1405586570/browserify-2-hexagon-sticker.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "2.4KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "37%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "PrioritizeVisibleContent": {
        "localizedRuleName": "Prioritize visible content",
        "ruleImpact": 0,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "You have the above-the-fold content properly prioritized. Learn more about {{BEGIN_LINK}}prioritizing visible content{{END_LINK}}.",
          "args": [
            {
              "type": "HYPERLINK",
              "key": "LINK",
              "value": "https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent"
            }
          ]
        }
      }
    }
  },
  "version": {
    "major": 1,
    "minor": 15
  }
}
```

## Related
- [gpagespeed-cli](https://github.com/zrrrzzt/gpagespeed-cli) CLI for this module

## License
[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/gpagespeed.png "Robohash image of gpagespeed")