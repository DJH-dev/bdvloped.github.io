import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )
    return (
    <div className='wrapper'
        css={css`
          display: grid;
          margin: 0 auto;
          max-width: 970px;
          grid-gap: 10px 40px;
          grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
          grid-auto-rows: minmax(300px, auto);
         ` 
        }
    >
        <header className='header'
            css={css`
                margin-left: 5px;
                margin-right: 5px;
                flex: 0 1 100%;
                grid-column: 1 / -1;
                `}
        >
                <Link to={`/`}>
                    <h2
                        css={css`
                        margin-top:${rhythm(1.5)};
                        margin-bottom: ${rhythm(2)};
                        display: inline-block;
                        font-style: normal;
                        `}
                    >
                        bdvloped
                    </h2>
                </Link>
                <h1 
                  css={css` text-align: center;`
                  }>{data.site.siteMetadata.title}</h1>
        </header>
            {children}
    </div>
    )
}
