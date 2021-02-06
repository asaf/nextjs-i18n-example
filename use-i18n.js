import { useCallback } from "react";
import { useRouter } from "next/router";

const format = (msg, ...args) => {
  for (let k in args) {
    msg = msg.replace("{" + k + "}", args[k]);
  }
  return msg;
};

export function useI18n(msgs) {
  const router = useRouter();
  const { locale } = router;

  const t = useCallback(
    (id, ...args) => {
      const lmsgs = msgs[locale];
      const msg = lmsgs[id] || msgs.en[id] || id;

      return format(msg, ...args);
    },
    [locale]
  );

  return {
    t,
    locale,
  };
}

export default useI18n;
