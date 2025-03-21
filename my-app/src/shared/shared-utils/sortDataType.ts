import { Articles, Video } from '@/shared/shared-components/componentsTypes';

type Data = Articles | Video;
export type DataSort = Pick<Data, 'creation_time'>[];
