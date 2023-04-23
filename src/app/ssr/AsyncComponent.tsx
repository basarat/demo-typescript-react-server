export const AsyncComponent = async () => {

  await new Promise(
    resolve => setTimeout(resolve, 1000)
  );

  return (<div>Hello Async Await</div>)
}