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
      when: "afterChildren",
      duration: 1,
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
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
                background: #ffffff;
                color: #2f2f2f;
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
