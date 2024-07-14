import { PropsWithChildren, useEffect } from "react"

export const ComponentProvider = (props: PropsWithChildren) => {
  useEffect(() => {
    handle()
  }, []);

  function handle() {
    if (document.getElementById('ez-provider')) {
      return;
    }

    const provider = document.createElement('div');
    provider.id = "ez-provider";

    const modal = document.createElement('div');
    modal.id = 'ez-modal';
    
    const toast = document.createElement('div');
    toast.id = 'ez-toast';

    provider.appendChild(modal);
    provider.appendChild(toast);

    document.body.appendChild(provider);
  }

  return props.children;
}