import React, {useMemo} from 'react';

import {uniqueId} from '../../../../../utilities';
import {copyTextToClipboard} from '../../../../../../documentation/utilities';

import styles from './Title.scss';

export function Title({
  type = 'h1',
  children,
}: {
  type: string;
  children: React.ReactChildren;
}) {
  const id = useMemo(() => uniqueId('titleAnchor'), []);

  const markup = useMemo(() => {
    switch (type) {
      case 'h1':
        return <h1 className={styles.h2}>{children}</h1>;
        break;
      case 'h2':
        return <h2 className={styles.h2}>{children}</h2>;
        break;
      case 'h3':
        return <h3 className={styles.h3}>{children}</h3>;
        break;
      case 'h4':
        return <h4 className={styles.h4}>{children}</h4>;
        break;

      default:
        return children;
        break;
    }
  }, [children, type]);

  const handleInteraction = (event: any) => {
    event.preventDefault();
    const url = `${window.location.href}#${id}`.replace(
      'iframe.html?id=',
      '?path=/docs/',
    );
    copyTextToClipboard(url);
  };
  return (
    <a
      className={styles.TitleAnchor}
      id={id}
      href={`#${id}`}
      onClick={handleInteraction}
    >
      {markup}
    </a>
  );
}