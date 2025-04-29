import React from "react";

type TextWithTagsProps = {
  content: string;
};

/**
 * HTMLタグを含むテキストを安全にレンダリングするコンポーネント
 * dangerouslySetInnerHTMLの代わりに使用します
 * 
 * 現在サポートしているタグ: <b>, <br>, <i>, <strong>, <em>
 * 
 * @example
 * <TextWithTags content="こんにちは、<b>太字</b>のテキストです。<br />改行もできます。" />
 */
export function TextWithTags({ content }: TextWithTagsProps): React.ReactElement {
  // 簡易的なHTMLパーサー
  // テキストを分割してReact要素の配列に変換
  const parseHtml = (htmlString: string): React.ReactNode[] => {
    // サポートするタグの正規表現
    const tagRegex = /<(\/?)(\w+)(\s+[^>]*)?>/g;
    
    // テキストを分割
    const parts: string[] = htmlString.split(tagRegex);
    const result: React.ReactNode[] = [];
    let currentIndex = 0;
    
    // 現在のタグのスタック
    const tagStack: string[] = [];
    let currentContent = '';
    
    // 各部分を処理
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      
      if (i % 4 === 0) {
        // テキスト部分
        if (part) currentContent += part;
      } else if (i % 4 === 1) {
        // 閉じタグかどうか
        if (part === "/") {
          // 閉じタグの場合、スタックから最後のタグを取り出す
          const lastTag = tagStack.pop();
          // テキストをラップするReact要素を作成
          if (lastTag === 'b' || lastTag === 'strong') {
            result.push(<strong key={currentIndex++}>{currentContent}</strong>);
          } else if (lastTag === 'i' || lastTag === 'em') {
            result.push(<em key={currentIndex++}>{currentContent}</em>);
          } else {
            result.push(currentContent);
          }
          currentContent = '';
        }
      } else if (i % 4 === 2) {
        // タグ名
        if (parts[i-1] !== "/") {
          if (part === 'br') {
            // brタグは特別処理
            if (currentContent) {
              result.push(currentContent);
              currentContent = '';
            }
            result.push(<br key={currentIndex++} />);
          } else {
            // 開始タグをスタックに追加
            tagStack.push(part);
          }
        }
      }
      // i % 4 === 3 はタグの属性で、現在は無視
    }
    
    // 残りのテキストを追加
    if (currentContent) {
      result.push(currentContent);
    }
    
    return result;
  };

  return <>{parseHtml(content)}</>;
}