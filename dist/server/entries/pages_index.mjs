import { i as import_0 } from "../chunks/chunk-0fc6412c.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { Box, Button, Flex, HStack, Image, List, ListItem, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import "@tanstack/react-query";
import "react-dom/server";
import "vike/server";
const NavigationMenu = () => {
  const [activeNavItem, setActiveNavItem] = useState("#home");
  useEffect(() => {
    const handleHashChange = (event) => {
      event.preventDefault();
      const { hash } = event.target;
      let targetElement = null;
      if (hash) {
        targetElement = document == null ? void 0 : document.querySelector(hash);
      }
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleHashChange);
    });
    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleHashChange);
      });
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    Box,
    {
      as: "nav",
      pos: "fixed",
      top: "0",
      bg: "white",
      boxShadow: "md",
      zIndex: "1000",
      h: "50px",
      w: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px",
      bgColor: "lightgrey",
      children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            as: "a",
            href: "#home",
            variant: "ghost",
            onClick: () => setActiveNavItem("#home"),
            isActive: activeNavItem === "#home",
            children: "Domov"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            as: "a",
            href: "#salon",
            variant: "ghost",
            onClick: () => setActiveNavItem("#salon"),
            isActive: activeNavItem === "#salon",
            children: "Salón"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            as: "a",
            href: "#pedicure",
            variant: "ghost",
            onClick: () => setActiveNavItem("#pedicure"),
            isActive: activeNavItem === "#pedicure",
            children: "Pedikúra"
          }
        )
      ]
    }
  );
};
const ContentSectionRight = (props) => {
  const { id } = props;
  return /* @__PURE__ */ jsx(
    Flex,
    {
      id,
      justify: "center",
      h: "calc(100vh - 50px)",
      w: "100%",
      align: "center",
      overflow: "hidden",
      p: 8,
      children: /* @__PURE__ */ jsxs(HStack, { gap: "50px", h: "75%", overflow: "hidden", children: [
        /* @__PURE__ */ jsx(
          Image,
          {
            w: "80%",
            h: "100%",
            aspectRatio: "2:1",
            src: "/img.png",
            alt: "Big Picture",
            mb: "4"
          }
        ),
        /* @__PURE__ */ jsx(List, { w: "20%", children: /* @__PURE__ */ jsxs(ListItem, { children: [
          /* @__PURE__ */ jsx(Heading, { children: "Luxury" }),
          /* @__PURE__ */ jsx(Heading, { children: "Luxury" }),
          /* @__PURE__ */ jsx(Heading, { children: "Luxury" }),
          /* @__PURE__ */ jsx(Heading, { children: "Luxury" })
        ] }) })
      ] })
    }
  );
};
const ContentSection$1 = () => {
  return /* @__PURE__ */ jsx(
    Flex,
    {
      justify: "flex-end",
      h: "calc(100vh - 50px)",
      w: "100%",
      align: "center",
      overflow: "hidden",
      p: 8,
      bgImage: "/salon_tools.png",
      bgRepeat: "no-repeat",
      bgSize: "cover",
      children: /* @__PURE__ */ jsx(HStack, { gap: "50px", h: "75%", overflow: "hidden", children: /* @__PURE__ */ jsxs(Flex, { flexDirection: "row", justifyContent: "center", children: [
        /* @__PURE__ */ jsx(Image, { w: "150px", src: "/java_coffe.svg" }),
        /* @__PURE__ */ jsx(
          Text,
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: 50,
            children: "Charisma Salón & Coffe"
          }
        )
      ] }) })
    }
  );
};
const ContentSection = (props) => {
  const { id } = props;
  return /* @__PURE__ */ jsx(
    Flex,
    {
      id,
      justify: "center",
      h: "calc(100vh - 50px)",
      w: "100%",
      align: "center",
      overflow: "hidden",
      p: 8,
      children: /* @__PURE__ */ jsxs(
        Flex,
        {
          flexDirection: { base: "column", sm: "row" },
          gap: "50px",
          h: "75%",
          overflow: "hidden",
          children: [
            /* @__PURE__ */ jsx(List, { w: { base: "20%", sm: "100%" }, children: /* @__PURE__ */ jsxs(ListItem, { display: "flex", flexDirection: "column", children: [
              /* @__PURE__ */ jsx(Heading, { children: "Luxury" }),
              /* @__PURE__ */ jsx(Heading, { children: "Luxury" }),
              /* @__PURE__ */ jsx(Heading, { children: "Luxury" }),
              /* @__PURE__ */ jsx(Heading, { children: "Luxury" })
            ] }) }),
            /* @__PURE__ */ jsx(Image, { w: "80%", src: "/img.png", alt: "Big Picture", mb: "4" })
          ]
        }
      )
    }
  );
};
function Page() {
  return /* @__PURE__ */ jsx(Flex, { w: "calc(100vw - 8px)", h: "100vh", display: "flex", children: /* @__PURE__ */ jsxs(Box, { id: "home", h: "100%", w: "100%", children: [
    /* @__PURE__ */ jsx(NavigationMenu, {}),
    /* @__PURE__ */ jsxs(Box, { position: "relative", top: "50px", children: [
      /* @__PURE__ */ jsx(Box, { h: "100%", w: "100%", children: /* @__PURE__ */ jsx(ContentSection$1, {}) }),
      /* @__PURE__ */ jsx(Box, { h: "100%", w: "100%", children: /* @__PURE__ */ jsx(ContentSectionRight, { id: "salon" }) }),
      /* @__PURE__ */ jsx(Box, { h: "100%", w: "100%", children: /* @__PURE__ */ jsx(ContentSection, { id: "pedicure" }) })
    ] })
  ] }) });
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "/renderer/+onRenderHtml.tsx",
    isValueFile: true,
    exportValues: import_0
  },
  {
    configName: "Page",
    importPath: "/pages/index/+Page.tsx",
    isValueFile: true,
    exportValues: import_1
  }
];
const configValuesSerialized = {
  ["passToClient"]: {
    definedAt: { "files": [{ "filePathToShowToUser": "/renderer/+config.h.ts", "fileExportPathToShowToUser": ["default", "passToClient"] }] },
    valueSerialized: '["pageProps","urlPathname"]'
  }
};
export {
  configValuesImported,
  configValuesSerialized
};
