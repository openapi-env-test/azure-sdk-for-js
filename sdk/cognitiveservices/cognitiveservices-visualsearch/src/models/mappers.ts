/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const ResponseBase: msRest.CompositeMapper = {
  serializedName: "ResponseBase",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "_type",
      clientName: "_type"
    },
    uberParent: "ResponseBase",
    className: "ResponseBase",
    modelProperties: {
      _type: {
        required: true,
        serializedName: "_type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Identifiable: msRest.CompositeMapper = {
  serializedName: "Identifiable",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Identifiable",
    modelProperties: {
      ...ResponseBase.type.modelProperties,
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Response: msRest.CompositeMapper = {
  serializedName: "Response",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Response",
    modelProperties: {
      ...Identifiable.type.modelProperties,
      readLink: {
        readOnly: true,
        serializedName: "readLink",
        type: {
          name: "String"
        }
      },
      webSearchUrl: {
        readOnly: true,
        serializedName: "webSearchUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Thing: msRest.CompositeMapper = {
  serializedName: "Thing",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Thing",
    modelProperties: {
      ...Response.type.modelProperties,
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      url: {
        readOnly: true,
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      image: {
        readOnly: true,
        serializedName: "image",
        type: {
          name: "Composite",
          className: "ImageObject"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      alternateName: {
        readOnly: true,
        serializedName: "alternateName",
        type: {
          name: "String"
        }
      },
      bingId: {
        readOnly: true,
        serializedName: "bingId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Intangible: msRest.CompositeMapper = {
  serializedName: "Intangible",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Intangible",
    modelProperties: {
      ...Thing.type.modelProperties
    }
  }
};

export const StructuredValue: msRest.CompositeMapper = {
  serializedName: "StructuredValue",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "StructuredValue",
    modelProperties: {
      ...Intangible.type.modelProperties
    }
  }
};

export const Point2D: msRest.CompositeMapper = {
  serializedName: "Point2D",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Point2D",
    modelProperties: {
      ...StructuredValue.type.modelProperties,
      x: {
        required: true,
        serializedName: "x",
        type: {
          name: "Number"
        }
      },
      y: {
        required: true,
        serializedName: "y",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const NormalizedQuadrilateral: msRest.CompositeMapper = {
  serializedName: "NormalizedQuadrilateral",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "NormalizedQuadrilateral",
    modelProperties: {
      ...StructuredValue.type.modelProperties,
      topLeft: {
        required: true,
        serializedName: "topLeft",
        type: {
          name: "Composite",
          className: "Point2D"
        }
      },
      topRight: {
        required: true,
        serializedName: "topRight",
        type: {
          name: "Composite",
          className: "Point2D"
        }
      },
      bottomRight: {
        required: true,
        serializedName: "bottomRight",
        type: {
          name: "Composite",
          className: "Point2D"
        }
      },
      bottomLeft: {
        required: true,
        serializedName: "bottomLeft",
        type: {
          name: "Composite",
          className: "Point2D"
        }
      }
    }
  }
};

export const ImageTagRegion: msRest.CompositeMapper = {
  serializedName: "ImageTagRegion",
  type: {
    name: "Composite",
    className: "ImageTagRegion",
    modelProperties: {
      queryRectangle: {
        required: true,
        serializedName: "queryRectangle",
        type: {
          name: "Composite",
          className: "NormalizedQuadrilateral"
        }
      },
      displayRectangle: {
        required: true,
        serializedName: "displayRectangle",
        type: {
          name: "Composite",
          className: "NormalizedQuadrilateral"
        }
      }
    }
  }
};

export const CreativeWork: msRest.CompositeMapper = {
  serializedName: "CreativeWork",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "CreativeWork",
    modelProperties: {
      ...Thing.type.modelProperties,
      thumbnailUrl: {
        readOnly: true,
        serializedName: "thumbnailUrl",
        type: {
          name: "String"
        }
      },
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Thing"
            }
          }
        }
      },
      datePublished: {
        readOnly: true,
        serializedName: "datePublished",
        type: {
          name: "String"
        }
      },
      text: {
        readOnly: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      mainEntity: {
        readOnly: true,
        serializedName: "mainEntity",
        type: {
          name: "Composite",
          className: "Thing"
        }
      }
    }
  }
};

export const Action: msRest.CompositeMapper = {
  serializedName: "Action",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Action",
    modelProperties: {
      ...CreativeWork.type.modelProperties,
      result: {
        readOnly: true,
        serializedName: "result",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Thing"
            }
          }
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      isTopAction: {
        readOnly: true,
        serializedName: "isTopAction",
        type: {
          name: "Boolean"
        }
      },
      serviceUrl: {
        readOnly: true,
        serializedName: "serviceUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageAction: msRest.CompositeMapper = {
  serializedName: "ImageAction",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageAction",
    modelProperties: {
      ...Action.type.modelProperties,
      actionType: {
        readOnly: true,
        serializedName: "actionType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageTag: msRest.CompositeMapper = {
  serializedName: "ImageTag",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageTag",
    modelProperties: {
      ...Thing.type.modelProperties,
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      boundingBox: {
        readOnly: true,
        serializedName: "boundingBox",
        type: {
          name: "Composite",
          className: "ImageTagRegion"
        }
      },
      actions: {
        readOnly: true,
        serializedName: "actions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageAction"
            }
          }
        }
      }
    }
  }
};

export const Organization: msRest.CompositeMapper = {
  serializedName: "Organization",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Organization",
    modelProperties: {
      ...Thing.type.modelProperties
    }
  }
};

export const PropertiesItem: msRest.CompositeMapper = {
  serializedName: "Properties/Item",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "_type",
      clientName: "_type"
    },
    uberParent: "PropertiesItem",
    className: "PropertiesItem",
    modelProperties: {
      text: {
        readOnly: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      _type: {
        required: true,
        serializedName: "_type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Rating: msRest.CompositeMapper = {
  serializedName: "Rating",
  type: {
    name: "Composite",
    polymorphicDiscriminator: PropertiesItem.type.polymorphicDiscriminator,
    uberParent: "PropertiesItem",
    className: "Rating",
    modelProperties: {
      ...PropertiesItem.type.modelProperties,
      ratingValue: {
        required: true,
        serializedName: "ratingValue",
        type: {
          name: "Number"
        }
      },
      bestRating: {
        readOnly: true,
        serializedName: "bestRating",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AggregateRating: msRest.CompositeMapper = {
  serializedName: "AggregateRating",
  type: {
    name: "Composite",
    polymorphicDiscriminator: PropertiesItem.type.polymorphicDiscriminator,
    uberParent: "PropertiesItem",
    className: "AggregateRating",
    modelProperties: {
      ...Rating.type.modelProperties,
      reviewCount: {
        readOnly: true,
        serializedName: "reviewCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Offer: msRest.CompositeMapper = {
  serializedName: "Offer",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Offer",
    modelProperties: {
      ...Thing.type.modelProperties,
      seller: {
        readOnly: true,
        serializedName: "seller",
        type: {
          name: "Composite",
          className: "Organization"
        }
      },
      price: {
        readOnly: true,
        serializedName: "price",
        type: {
          name: "Number"
        }
      },
      priceCurrency: {
        readOnly: true,
        serializedName: "priceCurrency",
        defaultValue: 'USD',
        type: {
          name: "String"
        }
      },
      availability: {
        readOnly: true,
        serializedName: "availability",
        type: {
          name: "String"
        }
      },
      aggregateRating: {
        readOnly: true,
        serializedName: "aggregateRating",
        type: {
          name: "Composite",
          className: "AggregateRating"
        }
      },
      lastUpdated: {
        readOnly: true,
        serializedName: "lastUpdated",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AggregateOffer: msRest.CompositeMapper = {
  serializedName: "AggregateOffer",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "AggregateOffer",
    modelProperties: {
      ...Offer.type.modelProperties,
      offers: {
        readOnly: true,
        serializedName: "offers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Offer"
            }
          }
        }
      }
    }
  }
};

export const ImagesImageMetadata: msRest.CompositeMapper = {
  serializedName: "Images/ImageMetadata",
  type: {
    name: "Composite",
    className: "ImagesImageMetadata",
    modelProperties: {
      shoppingSourcesCount: {
        readOnly: true,
        serializedName: "shoppingSourcesCount",
        type: {
          name: "Number"
        }
      },
      recipeSourcesCount: {
        readOnly: true,
        serializedName: "recipeSourcesCount",
        type: {
          name: "Number"
        }
      },
      aggregateOffer: {
        readOnly: true,
        serializedName: "aggregateOffer",
        type: {
          name: "Composite",
          className: "AggregateOffer"
        }
      }
    }
  }
};

export const MediaObject: msRest.CompositeMapper = {
  serializedName: "MediaObject",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "MediaObject",
    modelProperties: {
      ...CreativeWork.type.modelProperties,
      contentUrl: {
        readOnly: true,
        serializedName: "contentUrl",
        type: {
          name: "String"
        }
      },
      hostPageUrl: {
        readOnly: true,
        serializedName: "hostPageUrl",
        type: {
          name: "String"
        }
      },
      contentSize: {
        readOnly: true,
        serializedName: "contentSize",
        type: {
          name: "String"
        }
      },
      encodingFormat: {
        readOnly: true,
        serializedName: "encodingFormat",
        type: {
          name: "String"
        }
      },
      hostPageDisplayUrl: {
        readOnly: true,
        serializedName: "hostPageDisplayUrl",
        type: {
          name: "String"
        }
      },
      width: {
        readOnly: true,
        serializedName: "width",
        type: {
          name: "Number"
        }
      },
      height: {
        readOnly: true,
        serializedName: "height",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ImageObject: msRest.CompositeMapper = {
  serializedName: "ImageObject",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageObject",
    modelProperties: {
      ...MediaObject.type.modelProperties,
      thumbnail: {
        readOnly: true,
        serializedName: "thumbnail",
        type: {
          name: "Composite",
          className: "ImageObject"
        }
      },
      imageInsightsToken: {
        readOnly: true,
        serializedName: "imageInsightsToken",
        type: {
          name: "String"
        }
      },
      insightsMetadata: {
        readOnly: true,
        serializedName: "insightsMetadata",
        type: {
          name: "Composite",
          className: "ImagesImageMetadata"
        }
      },
      imageId: {
        readOnly: true,
        serializedName: "imageId",
        type: {
          name: "String"
        }
      },
      accentColor: {
        readOnly: true,
        serializedName: "accentColor",
        type: {
          name: "String"
        }
      },
      visualWords: {
        readOnly: true,
        serializedName: "visualWords",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageKnowledge: msRest.CompositeMapper = {
  serializedName: "ImageKnowledge",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageKnowledge",
    modelProperties: {
      ...Response.type.modelProperties,
      tags: {
        readOnly: true,
        serializedName: "tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageTag"
            }
          }
        }
      },
      image: {
        readOnly: true,
        serializedName: "image",
        type: {
          name: "Composite",
          className: "ImageObject"
        }
      }
    }
  }
};

export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        defaultValue: 'None',
        type: {
          name: "String"
        }
      },
      subCode: {
        readOnly: true,
        serializedName: "subCode",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      moreDetails: {
        readOnly: true,
        serializedName: "moreDetails",
        type: {
          name: "String"
        }
      },
      parameter: {
        readOnly: true,
        serializedName: "parameter",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ErrorResponse",
    modelProperties: {
      ...Response.type.modelProperties,
      errors: {
        required: true,
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorModel"
            }
          }
        }
      }
    }
  }
};

export const Person: msRest.CompositeMapper = {
  serializedName: "Person",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Person",
    modelProperties: {
      ...Thing.type.modelProperties,
      jobTitle: {
        readOnly: true,
        serializedName: "jobTitle",
        type: {
          name: "String"
        }
      },
      twitterProfile: {
        readOnly: true,
        serializedName: "twitterProfile",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageEntityAction: msRest.CompositeMapper = {
  serializedName: "ImageEntityAction",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageEntityAction",
    modelProperties: {
      ...ImageAction.type.modelProperties,
      data: {
        readOnly: true,
        serializedName: "data",
        type: {
          name: "Composite",
          className: "Thing"
        }
      },
      isTranslated: {
        readOnly: true,
        serializedName: "isTranslated",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ImagesModule: msRest.CompositeMapper = {
  serializedName: "ImagesModule",
  type: {
    name: "Composite",
    className: "ImagesModule",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageObject"
            }
          }
        }
      }
    }
  }
};

export const ImageModuleAction: msRest.CompositeMapper = {
  serializedName: "ImageModuleAction",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageModuleAction",
    modelProperties: {
      ...ImageAction.type.modelProperties,
      data: {
        readOnly: true,
        serializedName: "data",
        type: {
          name: "Composite",
          className: "ImagesModule"
        }
      }
    }
  }
};

export const Recipe: msRest.CompositeMapper = {
  serializedName: "Recipe",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Recipe",
    modelProperties: {
      ...CreativeWork.type.modelProperties,
      cookTime: {
        readOnly: true,
        serializedName: "cookTime",
        type: {
          name: "String"
        }
      },
      prepTime: {
        readOnly: true,
        serializedName: "prepTime",
        type: {
          name: "String"
        }
      },
      totalTime: {
        readOnly: true,
        serializedName: "totalTime",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RecipesModule: msRest.CompositeMapper = {
  serializedName: "RecipesModule",
  type: {
    name: "Composite",
    className: "RecipesModule",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Recipe"
            }
          }
        }
      }
    }
  }
};

export const ImageRecipesAction: msRest.CompositeMapper = {
  serializedName: "ImageRecipesAction",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageRecipesAction",
    modelProperties: {
      ...ImageAction.type.modelProperties,
      data: {
        readOnly: true,
        serializedName: "data",
        type: {
          name: "Composite",
          className: "RecipesModule"
        }
      }
    }
  }
};

export const Query: msRest.CompositeMapper = {
  serializedName: "Query",
  type: {
    name: "Composite",
    className: "Query",
    modelProperties: {
      text: {
        required: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      displayText: {
        readOnly: true,
        serializedName: "displayText",
        type: {
          name: "String"
        }
      },
      webSearchUrl: {
        readOnly: true,
        serializedName: "webSearchUrl",
        type: {
          name: "String"
        }
      },
      searchLink: {
        readOnly: true,
        serializedName: "searchLink",
        type: {
          name: "String"
        }
      },
      thumbnail: {
        readOnly: true,
        serializedName: "thumbnail",
        type: {
          name: "Composite",
          className: "ImageObject"
        }
      }
    }
  }
};

export const RelatedSearchesModule: msRest.CompositeMapper = {
  serializedName: "RelatedSearchesModule",
  type: {
    name: "Composite",
    className: "RelatedSearchesModule",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Query"
            }
          }
        }
      }
    }
  }
};

export const ImageRelatedSearchesAction: msRest.CompositeMapper = {
  serializedName: "ImageRelatedSearchesAction",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageRelatedSearchesAction",
    modelProperties: {
      ...ImageAction.type.modelProperties,
      data: {
        readOnly: true,
        serializedName: "data",
        type: {
          name: "Composite",
          className: "RelatedSearchesModule"
        }
      }
    }
  }
};

export const ImageShoppingSourcesAction: msRest.CompositeMapper = {
  serializedName: "ImageShoppingSourcesAction",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageShoppingSourcesAction",
    modelProperties: {
      ...ImageAction.type.modelProperties,
      data: {
        readOnly: true,
        serializedName: "data",
        type: {
          name: "Composite",
          className: "AggregateOffer"
        }
      }
    }
  }
};

export const License: msRest.CompositeMapper = {
  serializedName: "License",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "License",
    modelProperties: {
      ...CreativeWork.type.modelProperties
    }
  }
};

export const CropArea: msRest.CompositeMapper = {
  serializedName: "CropArea",
  type: {
    name: "Composite",
    className: "CropArea",
    modelProperties: {
      top: {
        required: true,
        serializedName: "top",
        type: {
          name: "Number"
        }
      },
      bottom: {
        required: true,
        serializedName: "bottom",
        type: {
          name: "Number"
        }
      },
      left: {
        required: true,
        serializedName: "left",
        type: {
          name: "Number"
        }
      },
      right: {
        required: true,
        serializedName: "right",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ImageInfo: msRest.CompositeMapper = {
  serializedName: "ImageInfo",
  type: {
    name: "Composite",
    className: "ImageInfo",
    modelProperties: {
      imageInsightsToken: {
        serializedName: "imageInsightsToken",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      cropArea: {
        serializedName: "cropArea",
        type: {
          name: "Composite",
          className: "CropArea"
        }
      }
    }
  }
};

export const Filters: msRest.CompositeMapper = {
  serializedName: "Filters",
  type: {
    name: "Composite",
    className: "Filters",
    modelProperties: {
      site: {
        serializedName: "site",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KnowledgeRequest: msRest.CompositeMapper = {
  serializedName: "KnowledgeRequest",
  type: {
    name: "Composite",
    className: "KnowledgeRequest",
    modelProperties: {
      filters: {
        serializedName: "filters",
        type: {
          name: "Composite",
          className: "Filters"
        }
      }
    }
  }
};

export const VisualSearchRequest: msRest.CompositeMapper = {
  serializedName: "VisualSearchRequest",
  type: {
    name: "Composite",
    className: "VisualSearchRequest",
    modelProperties: {
      imageInfo: {
        serializedName: "imageInfo",
        type: {
          name: "Composite",
          className: "ImageInfo"
        }
      },
      knowledgeRequest: {
        serializedName: "knowledgeRequest",
        type: {
          name: "Composite",
          className: "KnowledgeRequest"
        }
      }
    }
  }
};

export const discriminators = {
  'ResponseBase.Point2D' : Point2D,
  'ResponseBase.NormalizedQuadrilateral' : NormalizedQuadrilateral,
  'ResponseBase.ImageAction' : ImageAction,
  'ResponseBase.ImageTag' : ImageTag,
  'ResponseBase.Organization' : Organization,
  'PropertiesItem.AggregateRating' : AggregateRating,
  'ResponseBase.Offer' : Offer,
  'ResponseBase.AggregateOffer' : AggregateOffer,
  'ResponseBase.ImageObject' : ImageObject,
  'ResponseBase.ImageKnowledge' : ImageKnowledge,
  'ResponseBase.Response' : Response,
  'ResponseBase.Identifiable' : Identifiable,
  'ResponseBase.ErrorResponse' : ErrorResponse,
  'ResponseBase.Thing' : Thing,
  'ResponseBase.Action' : Action,
  'ResponseBase.MediaObject' : MediaObject,
  'ResponseBase' : ResponseBase,
  'ResponseBase.CreativeWork' : CreativeWork,
  'ResponseBase.Person' : Person,
  'ResponseBase.Intangible' : Intangible,
  'ResponseBase.ImageEntityAction' : ImageEntityAction,
  'ResponseBase.ImageModuleAction' : ImageModuleAction,
  'ResponseBase.Recipe' : Recipe,
  'ResponseBase.ImageRecipesAction' : ImageRecipesAction,
  'ResponseBase.ImageRelatedSearchesAction' : ImageRelatedSearchesAction,
  'ResponseBase.ImageShoppingSourcesAction' : ImageShoppingSourcesAction,
  'ResponseBase.License' : License,
  'ResponseBase.StructuredValue' : StructuredValue,
  'Properties/Item' : PropertiesItem,
  'PropertiesItem.Rating' : Rating

};
