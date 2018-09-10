<template>
  <div class="docs-demo-wrapper">
      <div class="docs-compile"><slot name="source"></slot></div>
      <div class="description" v-if="$slots.default">
        <slot></slot>
        <span class="code-expand-icon" @click="toggle">
          <img title="显示代码" src="../assets/imgs/close_code.svg" :class="{'code-expand-icon-hide':isExpand,'code-expand-icon-show':!isExpand}">
          <img title="隐藏代码" src="../assets/imgs/open_code.svg" :class="{'code-expand-icon-show':isExpand,'code-expand-icon-hide':!isExpand}">
        </span>
      </div>
      <div :style="{height: isExpand ? 'auto' : '0'}" class="demo-container">
        <div span="14">
          <div class="docs-demo docs-demo--expand">
            <div class="highlight-wrapper">
              <slot name="highlight"></slot>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
  import Vue from 'vue'
  export default {
    data() {
      return {
        isExpand: false
      };
    },
    methods: {
      toggle() {
        this.isExpand = !this.isExpand;
      }
    }
  };
</script>

<style lang="scss" type="text/scss">
  .docs-demo-wrapper{
    border: 1px solid #eee;
    border-radius: 6px;
    margin-bottom: 20px;
  }

  .docs-compile{
    padding: 20px;
    border-bottom: 1px solid #eee;
  }
  .description{
    position: relative;
    padding:0 38px 0 20px;
    line-height: 2;
  }
  .demo-container {
    transition: max-height .3s ease;
    overflow: hidden;
  }
  .docs-demo {
    width: 100%;
    height: auto;
    padding:20px 0;
    box-sizing: border-box;
    font-size: 14px;
    border-top: 1px dashed #eee;

    pre code {
      font-family: Consolas,Menlo,Courier,monospace;
      line-height: 22px;
      border: none;
    }
  }


  .docs-demo__code,
  .highlight-wrapper,
  .docs-demo__meta {
    padding: 0 20px;
    overflow-y: auto;
  }


  .docs-demo.docs-demo--expand .docs-demo__meta {
    border-bottom: 1px dashed #e9e9e9;
  }

  .highlight-wrapper {
    display: none;

    p,
    pre {
      margin: 0;
    }

    .hljs {
      padding: 0;
    }
  }

  .docs-demo.docs-demo--expand .highlight-wrapper {
    display: block;
  }

  .docs-demo__code__mobi {
    height: 620px;
    margin: 20px 0;
  }

  .docs-demo__code__mobi__header {
    border-radius: 4px 4px 0 0;
    background: -webkit-linear-gradient(rgba(55,55,55,.98),#545456);
    background: linear-gradient(rgba(55,55,55,.98),#545456);
    text-align: center;
    padding: 8px;

    img {
      width: 100%;
    }

    .url-box {
      height: 28px;
      line-height: 28px;
      color: #fff;
      padding: 0 3px;
      background-color: #a2a2a2;
      margin: 10px auto 0;
      border-radius: 4px;
      white-space: nowrap;
      overflow-x: auto;
    }
  }

  .docs-demo__code__mobi__content {
    iframe {
      width: 100%;
      border: 0;
      height: 548px;
    }
  }
  .code-expand-icon {
    position: absolute;
    right: 16px;
    bottom: 0px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    color: #314659;
  }

  .code-expand-icon-hide,.code-expand-icon-show {
    -webkit-transition: all .4s;
    transition: all .4s;
    user-select: none;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    max-width: 100%;
    width: 100%;
    vertical-align: baseline;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .code-expand-icon-show {
    opacity: .55;
    pointer-events: auto;
    &:hover{
      opacity: 1
    }
  }
  .code-expand-icon-hide {
    opacity: 0;
    pointer-events: none;
    &:hover{
      opacity: 1
    }
  }
  .hljs-built_in, .hljs-doctag, .hljs-keyword, .hljs-name, .hljs-section, .hljs-selector-class, .hljs-selector-id, .hljs-selector-tag, .hljs-strong, .hljs-tag, .hljs-title, .hljs-type{
    color: #42b983;
  }

  .hljs-keyword{
    color:#804671;
  }
  .hljs-attr{
    color:#74d0fe;
  }
  .hljs-string{
    color:#4ec9b0;
  }
</style>

