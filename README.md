[![Build Status](https://travis-ci.org/zrrrzzt/gpagespeed.svg?branch=master)](https://travis-ci.org/zrrrzzt/gpagespeed)
# gpagespeed

Node.js module/CLI app for analyzing a webpage with [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

You must acquire an API key from [Google Developers Console](https://console.developers.google.com/).

If you want a nice formatted report try [psi](https://github.com/addyosmani/psi) by Addy Osmani.

## Installation

From npm

```sh
$ npm install gpagespeed
```

or globally for the CLI app

```sh
$ npm install gpagespeed -g
```

From GitHub

```sh
$ git clone git@github.com:zrrrzzt/gpagespeed.git
```

Run setup

```sh
$ npm run setup
```

## Usage - Module

Pass an object with properties.

**url** and **key** are required, all other are optional.

You can see a list of all alternatives on the page for [Google PageSpeed standard query parameters](https://developers.google.com/speed/docs/insights/v2/reference/pagespeedapi/runpagespeed).

```javascript
var pagespeed = require('gpagespeed');
var options = {
  url: 'http://url-to-check',
  key: 'insert-your-key'
};

pagespeed(options, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
```

In addition you can choose to use https instead of googleapis and another version of the PageSpeed api (defaults to v2).

```javascript
var pagespeed = require('gpagespeed')
  , options = {
    url: 'http://url-to-check',
    key: 'insert-your-key',
    useweb: true,
    apiversion: 'v3beta1'
  };

pagespeed(options, function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
```

## Usage - CLI

```sh
$ gpagespeed <url> --key=<key>
```

Optional params for result. You can see a list of all alternatives on the page for [Google PageSpeed standard query parameters](https://developers.google.com/speed/docs/insights/v1/getting_started#st_params).

```sh
$ gpagespeed <url> --key=<key> filter_third_party_resources=<boolean> --locale=<locale> --rule=<rule> --screenshot=<boolean> --strategy=<desktop|mobile>
```

In addition you can use flags to select another version of the api (defaults to v2) and to use request instead of googlapis.

```sh
$ gpagespeed <url> --key=<key> --useweb=true --apiversion=<versionstring>
```

To use the free tier of Googles PageSpeed Insight you kan apply a nokey argument. This is okay for testing but an API-key is recommended.

```sh
$ gpagespeed <url> --nokey=true
```

To prettyprint the result I'll recommend [json](https://www.npmjs.com/package/json)

```sh
$ gpagespeed http://www.telemark.no --nokey=true --useweb=true --apiversion=v3beta1 | json
```

This will return

```javascript
{
  "kind": "pagespeedonline#result",
  "id": "http://www.telemark.no/",
  "responseCode": 200,
  "title": "Telemark fylkeskommune",
  "ruleGroups": {
    "SPEED": {
      "score": 66
    }
  },
  "pageStats": {
    "numberResources": 23,
    "numberHosts": 5,
    "totalRequestBytes": "3512",
    "numberStaticResources": 19,
    "htmlResponseBytes": "32731",
    "cssResponseBytes": "63831",
    "imageResponseBytes": "1033401",
    "javascriptResponseBytes": "421718",
    "numberJsResources": 5,
    "numberCssResources": 1
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
        "ruleImpact": 0,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "You have enabled browser caching. Learn more about {{BEGIN_LINK}}browser caching recommendations{{END_LINK}}.",
          "args": [
            {
              "type": "HYPERLINK",
              "key": "LINK",
              "value": "https://developers.google.com/speed/docs/insights/LeverageBrowserCaching"
            }
          ]
        }
      },
      "MainResourceServerResponseTime": {
        "localizedRuleName": "Reduce server response time",
        "ruleImpact": 0,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Your server responded quickly. Learn more about {{BEGIN_LINK}}server response time optimization{{END_LINK}}.",
          "args": [
            {
              "type": "HYPERLINK",
              "key": "LINK",
              "value": "https://developers.google.com/speed/docs/insights/Server"
            }
          ]
        }
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
        "ruleImpact": 0.057800000000000004,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Compacting HTML code, including any inline JavaScript and CSS contained in it, can save many bytes of data and speed up download and parse times."
        },
        "urlBlocks": [
          {
            "header": {
              "format": "{{BEGIN_LINK}}Minify HTML{{END_LINK}} for the following resources to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                },
                {
                  "type": "BYTES",
                  "key": "SIZE_IN_BYTES",
                  "value": "578B"
                },
                {
                  "type": "PERCENTAGE",
                  "key": "PERCENTAGE",
                  "value": "10%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.telemark.no/"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "578B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "10%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "MinifyJavaScript": {
        "localizedRuleName": "Minify JavaScript",
        "ruleImpact": 0.06870000000000001,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Compacting JavaScript code can save many bytes of data and speed up downloading, parsing, and execution time."
        },
        "urlBlocks": [
          {
            "header": {
              "format": "{{BEGIN_LINK}}Minify JavaScript{{END_LINK}} for the following resources to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                },
                {
                  "type": "BYTES",
                  "key": "SIZE_IN_BYTES",
                  "value": "607B"
                },
                {
                  "type": "PERCENTAGE",
                  "key": "PERCENTAGE",
                  "value": "2%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Minifying {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "http://www.telemark.no/js/fa1cc0c.js"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "607B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "2%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "MinimizeRenderBlockingResources": {
        "localizedRuleName": "Eliminate render-blocking JavaScript and CSS in above-the-fold content",
        "ruleImpact": 2,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Your page has {{NUM_CSS}} blocking CSS resources. This causes a delay in rendering your page.",
          "args": [
            {
              "type": "INT_LITERAL",
              "key": "NUM_CSS",
              "value": "1"
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
                      "value": "http://www.telemark.no/css/20a626b.css"
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
        "ruleImpact": 48.1405,
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
                  "value": "470.1KiB"
                },
                {
                  "type": "PERCENTAGE",
                  "key": "PERCENTAGE",
                  "value": "91%"
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
                      "value": "http://www.telemark.no/var/ezflow_site/storage/images/media/images/kampanje/kampanje-masteroppgave/155957-1-nor-NO/Kampanje-masteroppgave_responsive_09.jpg"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "287.6KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "96%"
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
                      "value": "http://www.telemark.no/var/ezflow_site/storage/images/media/images/kampanje/verdensarv-kampanje/155172-1-nor-NO/Verdensarv-kampanje_responsive_09.jpg"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "51.4KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "84%"
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
                      "value": "http://www.telemark.no/var/ezflow_site/storage/images/media/images/kampanje/hakastein-kulturminnepark/153626-1-nor-NO/Hakastein-kulturminnepark_responsive_09.jpg"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "50KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "86%"
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
                      "value": "http://www.telemark.no/var/ezflow_site/storage/images/media/images/kampanje/ung-i-telemark-2015-kampanje/155167-2-nor-NO/Ung-i-Telemark-2015-kampanje_responsive_09.jpg"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "44.8KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "85%"
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
                      "value": "http://www.telemark.no/var/ezflow_site/storage/images/media/images/kampanje/kampanje-elever/154723-1-nor-NO/Kampanje-elever_responsive_09.jpg"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "36.4KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "84%"
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
        "ruleImpact": 2,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "Your page requires additional network round trips to render the above-the-fold content. For best performance, reduce the amount of HTML needed to render above-the-fold content."
        },
        "urlBlocks": [
          {
            "header": {
              "format": "The entire HTML response was not sufficient to render the above-the-fold content. This usually indicates that additional resources, loaded after HTML parsing, were required to render above-the-fold content. {{BEGIN_LINK}}Prioritize visible content{{END_LINK}} that is needed for rendering above-the-fold by including it directly in the HTML response.",
              "args": [
                {
                  "type": "HYPERLINK",
                  "key": "LINK",
                  "value": "https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Only about {{PERCENTAGE}} of the final above-the-fold content could be rendered with the full HTML response {{SCREENSHOT}}.",
                  "args": [
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "20%"
                    },
                    {
                      "type": "SNAPSHOT_RECT",
                      "key": "SCREENSHOT",
                      "value": "snapshot:1"
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    }
  },
  "version": {
    "major": 1,
    "minor": 15
  }
}

```

## License
MIT