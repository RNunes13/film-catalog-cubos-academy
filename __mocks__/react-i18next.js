const React = require("react");
const reactI18next = require("react-i18next");

const hasChildren = (node) =>
  node && (node.children || (node.props && node.props.children));

const getChildren = (node) =>
  node && node.children ? node.children : node.props && node.props.children;

const renderNodes = (reactNodes) => {
  if (!reactNodes) return null;

  if (typeof reactNodes === "string") {
    return reactNodes;
  }

  return Object.keys(reactNodes).map((key, i) => {
    const child = reactNodes[key];
    const isElement = React.isValidElement(child);

    if (typeof child === "string") {
      return child;
    }
    if (hasChildren(child)) {
      const inner = renderNodes(getChildren(child));
      return React.cloneElement(child, { ...child.props, key: i }, inner);
    }
    if (typeof child === "object" && !isElement) {
      const keys = Object.keys(child) || [];
      return keys.reduce(
        (str, childKey) => `${str}${child[childKey]}`,
        ""
      );
    }

    return child;
  });
};

const useMock = [(k) => k, {}];
useMock.t = (k) => k;
useMock.i18n = { language: 'pt-BR' };
useMock.ready = true;

module.exports = {
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component) => {
    const MockedComponent = (props) => (
      <Component t={(k) => k} {...props} />
    )
    return MockedComponent
  },
  Trans: ({ children }) => renderNodes(children),
  Translation: ({ children }) => children((k) => k, { i18n: {} }),
  useTranslation: () => useMock,

  // mock if needed
  I18nextProvider: reactI18next.I18nextProvider,
  initReactI18next: reactI18next.initReactI18next,
  setDefaults: reactI18next.setDefaults,
  getDefaults: reactI18next.getDefaults,
  setI18n: reactI18next.setI18n,
  getI18n: reactI18next.getI18n,
};
