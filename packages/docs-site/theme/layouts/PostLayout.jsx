/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const rootCss = css`
  min-height: 100vh;
  background-color: #fff;

  .post-page__body {
    flex: 1;
    padding-top: 70px;
  }
  .post-page__main {
    padding: 20px;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 5px, rgb(0 0 0 / 10%) 0px 5px 22px -8px;
  }
  .post-page__header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`;

function PostLayout({ children, sidebar }) {
  return (
    <div className="flex flex-col post-page" css={rootCss}>
      <Header className="post-page__header" />
      <div className="flex post-page__body">
        {sidebar}
        {/* page */}
        <main className="flex-1 post-page__main">
          {children}
          <Footer />
        </main>
        {/* prev next button */}
        {/* current */}
        {/* menus */}
      </div>
    </div>
  );
}

export default PostLayout;
