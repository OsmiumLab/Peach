import detectEthereumProvider from '@metamask/detect-provider';

window.onload(() => {

  detectEthereumProvider().then((provider) => {

  if (provider) {
    // From now on, this should always be true:
    // provider === window.ethereum
    startApp(provider); // initialize your app
  } else {
    console.log('Please install MetaMask!');
  }
});

});