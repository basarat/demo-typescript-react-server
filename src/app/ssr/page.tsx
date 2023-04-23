import { AsyncComponent } from './AsyncComponent';

export default function Page() {
  return (
    <div>
      {/* @ts-expect-error */}
      <AsyncComponentWTF />
    </div>
  );
}