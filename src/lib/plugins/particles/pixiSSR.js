/* eslint-disable no-undef */
if (typeof window === 'undefined') {
  globalThis.window = {};
}
if (typeof self === 'undefined') {
  globalThis.self = globalThis.window;
}
if (typeof document === 'undefined') {
  if (window.document) {
    globalThis.document = window.document;
  } else {
    // @ts-expect-error - the actual browser `window.document` is read-only
    globalThis.document = window.document = {
      createElement: (elementName) => {
          switch (elementName) {
            case 'canvas':
              return {
                getContext: (contextName) => {
                  switch (contextName) {
                    case 'webgl':
                      return {
                        getExtension: () => {},
                      };
                    case '2d':
                      return {
                        fillRect: () => {},
                        drawImage: () => {},
                        getImageData: () => {},
                      };
                  }
                },
              };
          }
        },
    };
  }
}