import * as React from 'react';
import { useRecoilValue } from 'recoil';
import useThemeColors from '../../hooks/useThemeColors';
import { DashboardViewType } from '../../models';
import { ViewSelector } from '../../state';

export interface IListProps { }

export const List: React.FunctionComponent<IListProps> = ({
  children
}: React.PropsWithChildren<IListProps>) => {
  const view = useRecoilValue(ViewSelector);
  const { getColors } = useThemeColors();

  let className = '';
  if (view === DashboardViewType.Grid) {
    className = `grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8`;
  } else if (view === DashboardViewType.List) {
    className = `-mx-4`;
  }

  return (
    <ul role="list" className={className}>
      {view === DashboardViewType.List && (
        <li className={`px-5 relative uppercase py-2 border-b ${getColors('text-vulcan-100 dark:text-whisper-900 border-vulcan-50', 'text-[var(--vscode-editor-foreground)] border-[var(--frontmatter-border)]')
          }`}>
          <div className={`grid grid-cols-12 gap-x-4 sm:gap-x-6 xl:gap-x-8`}>
            <div className="col-span-8">Title</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Status</div>
          </div>
        </li>
      )}
      {children}
    </ul>
  );
};
