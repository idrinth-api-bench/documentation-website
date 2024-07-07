export default (setAllowed: (value: boolean) => void,) => {
  const consentChangedHandler = (event: CustomEvent,) => {
    if (event?.detail?.key === 'calendar') {
      const value = event.detail?.value ?? false;
      if (value) {
        setAllowed(value,);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        document.body.removeEventListener(
          'consentChanged',
          consentChangedHandler,
        );
      }
    }
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  document.body.addEventListener('consentChanged', consentChangedHandler,);
};
