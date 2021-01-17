import React from "react";
import App from "next/app";
import Layout from "../components/UI/Layout";
import { AnimatePresence, motion, Transition } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import "../index.css";

const queryClient = new QueryClient();
class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const spring: Transition = {
      type: "spring",
      damping: 20,
      stiffness: 100,
      when: "afterChildren",
    };

    return (
      <QueryClientProvider client={queryClient}>
        <Hydrate>
          <Layout>
            <div className="relative">
              <AnimatePresence>
                <div>
                  <motion.div
                    transition={spring}
                    key={router.pathname}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    id="page-transition"
                  >
                    <Component {...pageProps} key={router.pathname} />
                  </motion.div>
                </div>
              </AnimatePresence>
            </div>
          </Layout>

          <style jsx global>
            {`
              html {
                margin: 0;
                padding: 0;
              }

              body {
                margin: 0;
                padding: 0;
                background: #323030;
                color: #cacaca;
              }
            `}
          </style>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    );
  }
}

export default MyApp;
