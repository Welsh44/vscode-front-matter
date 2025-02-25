import { Messenger } from '@estruyf/vscode/dist/client';
import {
  ArrowCircleUpIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/outline';
import * as React from 'react';
import { useCallback } from 'react';
import { MergeIcon } from '../../../components/icons/MergeIcon';
import { DashboardMessage } from '../../DashboardMessage';
import { LinkButton } from '../Common/LinkButton';

export interface ITaxonomyActionsProps {
  field: string | null;
  value: string;
  unmapped?: boolean;
}

export const TaxonomyActions: React.FunctionComponent<ITaxonomyActionsProps> = ({
  field,
  value,
  unmapped
}: React.PropsWithChildren<ITaxonomyActionsProps>) => {
  const onEdit = useCallback(() => {
    Messenger.send(DashboardMessage.editTaxonomy, {
      type: field,
      value
    });
  }, [field, value]);

  const onAdd = useCallback(() => {
    Messenger.send(DashboardMessage.addToTaxonomy, {
      type: field,
      value
    });
  }, [field, value]);

  const onMerge = useCallback(() => {
    Messenger.send(DashboardMessage.mergeTaxonomy, {
      type: field,
      value
    });
  }, [field, value]);

  const onMove = useCallback(() => {
    Messenger.send(DashboardMessage.moveTaxonomy, {
      type: field,
      value
    });
  }, [field, value]);

  const onDelete = useCallback(() => {
    Messenger.send(DashboardMessage.deleteTaxonomy, {
      type: field,
      value
    });
  }, [field, value]);

  return (
    <div className={`space-x-2`}>
      {unmapped && (
        <LinkButton
          title={`Add ${value} to taxonomy settings`}
          onClick={onAdd}>
          <PlusIcon className={`w-4 h-4`} aria-hidden={true} />
          <span className="sr-only">Add to settings</span>
        </LinkButton>
      )}

      <LinkButton
        title={`Edit ${value}`}
        onClick={onEdit}>
        <PencilIcon className={`w-4 h-4`} aria-hidden={true} />
        <span className="sr-only">Edit</span>
      </LinkButton>

      <LinkButton
        title={`Merge ${value}`}
        onClick={onMerge}>
        <MergeIcon className={`w-4 h-4`} aria-hidden={true} />
        <span className="sr-only">Merge</span>
      </LinkButton>

      <LinkButton
        title={`Move to another taxonomy type`}
        onClick={onMove}>
        <ArrowCircleUpIcon className={`w-4 h-4`} aria-hidden={true} />
        <span className="sr-only">Move to another taxonomy type</span>
      </LinkButton>

      <LinkButton
        title={`Delete ${value}`}
        onClick={onDelete}>
        <TrashIcon className={`w-4 h-4`} aria-hidden={true} />
        <span className="sr-only">Delete</span>
      </LinkButton>
    </div>
  );
};
