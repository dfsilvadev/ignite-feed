import { useCallback } from "react";
import { format, formatDistanceToNow } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";

const useFormatDateTime = () => {
  const locale = { locale: ptBR, addSuffix: true };

  const publishedDateFormatted = useCallback(
    (value: Date) => format(value, "dd 'de' LLLL 'às' HH:mm'h'", locale),
    []
  );

  const publishedDateRelativeNow = useCallback(
    (value: Date) => formatDistanceToNow(value, locale),
    []
  );

  return [publishedDateFormatted, publishedDateRelativeNow];
};

export default useFormatDateTime;
