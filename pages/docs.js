import {RedocStandalone} from 'redoc';

export default function docs() {
  return (
    <div>
      <RedocStandalone
        specUrl="openapi.yaml"
        options={{
          nativeScrollbars: true,
          theme: {colors: {primary: {main: '#dd5522'}}},
        }}
      />
    </div>
  );
}
