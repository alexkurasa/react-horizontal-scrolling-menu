import React from 'react';

import { scrollContainerClassName } from '../../constants';

export type Props = {
  className?: string;
  children?: React.ReactNode;
  onScroll?: (event: React.UIEvent) => void;
  scrollRef: React.Ref<HTMLDivElement>;
  onTouchStart?: React.TouchEventHandler;
  onTouchEnd?: React.TouchEventHandler;
  onTouchMove?: React.TouchEventHandler;
};

// TODO: pass initialPosition ??
function ScrollContainer({
  className: _className = '',
  children,
  onScroll = () => void 0,
  scrollRef,
  onTouchStart,
  onTouchEnd,
  onTouchMove,
}: Props) {
  const scrollContainerClass = React.useMemo(
    () => `${scrollContainerClassName} ${_className}`,
    [_className]
  );

  return (
    <div
      className={scrollContainerClass}
      onScroll={onScroll}
      ref={scrollRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
      {children}
    </div>
  );
}

export default ScrollContainer;
