/**
 * Google reCAPTCHA Enterprise client-side token helper.
 */
export async function getRecaptchaToken(action: string): Promise<string> {
  const siteKey = '6LcuWygtAAAAAPC2f52c47XetIJe44hKjSUG1OUn';

  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve('');
      return;
    }

    const checkGrecaptcha = () => {
      const g = (window as any).grecaptcha;
      return g && g.enterprise && typeof g.enterprise.execute === 'function';
    };

    if (checkGrecaptcha()) {
      const g = (window as any).grecaptcha;
      g.enterprise.ready(() => {
        g.enterprise.execute(siteKey, { action })
          .then((token: string) => resolve(token))
          .catch((err: any) => {
            console.error('[reCAPTCHA] Execution failed:', err);
            resolve('');
          });
      });
      return;
    }

    // Poll if not immediately available (e.g., script still loading)
    let retries = 0;
    const maxRetries = 50; // 5 seconds maximum wait time
    const interval = setInterval(() => {
      if (checkGrecaptcha()) {
        clearInterval(interval);
        const g = (window as any).grecaptcha;
        g.enterprise.ready(() => {
          g.enterprise.execute(siteKey, { action })
            .then((token: string) => resolve(token))
            .catch((err: any) => {
              console.error('[reCAPTCHA] Execution failed after load:', err);
              resolve('');
            });
        });
      } else {
        retries++;
        if (retries >= maxRetries) {
          clearInterval(interval);
          console.warn('[reCAPTCHA] Script not initialized in time (possible adblocker).');
          resolve('');
        }
      }
    }, 100);
  });
}
