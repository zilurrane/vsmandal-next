
import React, { Fragment } from "react";
import styles from "./JsonToHTML.module.scss";
import { decode } from 'html-entities';

const Heading = ({ depth, children, ...props }) => {
  return React.createElement(`h${depth}`, props, children)
}

const renderSwitch = (item) => {
  switch (item.type) {
    case 'heading':
      return <Heading depth={item.depth} className={`${styles.heading} ${item.class}`}>
        <JsonToHTML json={item.tokens}></JsonToHTML>
      </Heading>
    case 'paragraph':
      return <div className={item.class}>
        <JsonToHTML json={item.tokens}></JsonToHTML>
      </div>
    case 'link':
      return <a href={item.href} title={item.title} target="_blank">
        <JsonToHTML json={item.tokens}></JsonToHTML>
      </a>
    case 'strong':
      return <strong>
        <JsonToHTML json={item.tokens}></JsonToHTML>
      </strong>
    case 'list':
      if (item.ordered) {
        return <ol start={item.start}>
          <JsonToHTML json={item.items}></JsonToHTML>
        </ol>
      }
      return <ul>
        <JsonToHTML json={item.items}></JsonToHTML>
      </ul>
    case 'list_item':
      return <li>
        <JsonToHTML json={item.tokens}></JsonToHTML>
      </li>
    case 'space':
      return <br className={styles.br} />
    case 'blockquote':
      return <blockquote className={styles.blockquote}>
        <JsonToHTML json={item.tokens}></JsonToHTML>
      </blockquote>
    case 'image':
      return <img className={`${styles.img} ${item.class}`} src={item.href} />
    case 'text':
      return decode(item.text);
  }
}

const JsonToHTML = ({ json = [] }) => {
  return (
    <Fragment>
      {
        json.map((item, index) => {
          return <Fragment key={index}>
            {
              renderSwitch(item)
            }
          </Fragment>
        })
      }
    </Fragment>
  );
}

export default JsonToHTML;
