export interface IconProps {
  className?: string;
}

export function GitHubIcon(props: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      ></path>
    </svg>
  );
}

export function BulloakIcon(props: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 1405.54 1454"
      className="w-6 h-6"
      {...props}
    >
      <path d="m724.07,1454h-81.92v-628.04l-292.02-174.04-186.35,182.81-150.78,2.97-11.77-84.59,63.47.24L0,673.28l14.67-116.55,139.64,171.26,120.33-121.1L39.95,467.3l34.05-78.27,100.48,59.99-22.84-182.77,74.83-60.93,37.63,296.12,377.95,225.4-.54-267.92-272.75-110.43-114.05-187.4,69.8-50.88,80.59,132.1,65.45-203.11,82.82,17.42-78.12,241.94,167.03,65.76.03-30.96-119.92-79.28,28.84-86.86,91.05,65.21.08-232.44h81.69l.15,161.24L899.86,28.01l96.5,36.04-272.28,206.6-.21,436.6,229.98-143.04-54.83-275.39.96-1.33,143.69-199.47,73.72,47.61-101.38,141.93,213.71-40,55.89,73.02-279.17,50.3,29.73,152.53,271.68-168.74,38.87,75.5-142.1,88.34,192.73,83.91,8.21,84.75-288-114.76-125.74,76.34,175.99,142.21,227.43-83.86,6.45,84.83-245.65,94.83-1.69-1.37-234.77-189.96-195.49,120.76v647.79Z" />
    </svg>
  );
}
