import React from 'react';
export declare type Props = {
    className?: string;
    children?: React.ReactNode;
    onScroll?: (event: React.UIEvent) => void;
    scrollRef: React.Ref<HTMLDivElement>;
    onTouchStart?: React.TouchEventHandler;
    onTouchEnd?: React.TouchEventHandler;
    onTouchMove?: React.TouchEventHandler;
};
declare function ScrollContainer({ className: _className, children, onScroll, scrollRef, onTouchStart, onTouchEnd, onTouchMove, }: Props): JSX.Element;
export default ScrollContainer;
