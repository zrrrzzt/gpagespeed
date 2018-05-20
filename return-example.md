# Return example

```JavaScript
{
  "captchaResult": "CAPTCHA_NOT_NEEDED",
  "kind": "pagespeedonline#result",
  "id": "https://www.google.com/",
  "responseCode": 200,
  "title": "Google",
  "ruleGroups": {
    "SPEED": {
      "score": 95
    }
  },
  "loadingExperience": {
    "id": "https://www.google.com/",
    "metrics": {
      "FIRST_CONTENTFUL_PAINT_MS": {
        "median": 675,
        "distributions": [
          {
            "min": 0,
            "max": 984,
            "proportion": 0.6493244163829708
          },
          {
            "min": 984,
            "max": 2073,
            "proportion": 0.1719613615949542
          },
          {
            "min": 2073,
            "proportion": 0.17871422202207507
          }
        ],
        "category": "FAST"
      },
      "DOM_CONTENT_LOADED_EVENT_FIRED_MS": {
        "median": 738,
        "distributions": [
          {
            "min": 0,
            "max": 1366,
            "proportion": 0.7176583317020245
          },
          {
            "min": 1366,
            "max": 2787,
            "proportion": 0.13515601984023135
          },
          {
            "min": 2787,
            "proportion": 0.147185648457744
          }
        ],
        "category": "FAST"
      }
    },
    "overall_category": "FAST",
    "initial_url": "https://www.google.com/"
  },
  "pageStats": {
    "numberResources": 16,
    "numberHosts": 7,
    "totalRequestBytes": "2759",
    "numberStaticResources": 11,
    "htmlResponseBytes": "227543",
    "overTheWireResponseBytes": "415879",
    "imageResponseBytes": "42287",
    "javascriptResponseBytes": "873988",
    "otherResponseBytes": "1459",
    "numberJsResources": 5,
    "numTotalRoundTrips": 10,
    "numRenderBlockingRoundTrips": 0
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
        "ruleImpact": 0,
        "groups": [
          "SPEED"
        ],
        "summary": {
          "format": "You have no render-blocking resources. Learn more about {{BEGIN_LINK}}removing render-blocking resources{{END_LINK}}.",
          "args": [
            {
              "type": "HYPERLINK",
              "key": "LINK",
              "value": "https://developers.google.com/speed/docs/insights/BlockingJS"
            }
          ]
        }
      },
      "OptimizeImages": {
        "localizedRuleName": "Optimize images",
        "ruleImpact": 0.078,
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
                  "value": "780B"
                },
                {
                  "type": "PERCENTAGE",
                  "key": "PERCENTAGE",
                  "value": "18%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Compressing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "key": "URL",
                      "value": "https://www.google.com/images/hpp/shield_privacy_checkup_green_2x_web_96dp.png"
                    },
                    {
                      "type": "BYTES",
                      "key": "SIZE_IN_BYTES",
                      "value": "780B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "18%"
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
        "ruleImpact": 4,
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
                  "format": "Only about {{PERCENTAGE}} of the final above-the-fold content could be rendered with the full HTML response.",
                  "args": [
                    {
                      "type": "PERCENTAGE",
                      "key": "PERCENTAGE",
                      "value": "64%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Click to see the screenshot with only the HTML response: {{SCREENSHOT}}",
                  "args": [
                    {
                      "type": "SNAPSHOT_RECT",
                      "key": "SCREENSHOT",
                      "value": "snapshot:2"
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