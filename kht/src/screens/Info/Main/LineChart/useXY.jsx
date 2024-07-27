import { useMemo } from "react";

const useXY = (data) => {
  const arr = useMemo(( ) => {
    if (!data) return [];

    const maxCount = data.reduce((max, obj) => Math.max(max, obj.count), -Infinity);
    const itemCount = data.length;
    const maxLineHeight = 90;
    const maxLineWidth = 145;

    const interval = maxLineWidth / (itemCount - 1 || 1);

    return data.map(({count}, index) => {
      const multiplierHeight = maxCount > 0 ? maxLineHeight / maxCount : 0;
      const line = maxLineHeight - Math.round(count * multiplierHeight);
      const lineHeight = Math.max(line, 1);
      
      return {
        x: index * interval,
        y: lineHeight
      };
    });
  }, [data]);

  return [arr];
}

export default useXY;