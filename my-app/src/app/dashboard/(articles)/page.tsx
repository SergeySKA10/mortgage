'use client';

import useGetData from '@/services/useGetData';
import ArticleCard from '@/features/components/ui/ArticleCard/ArticleCard';
import { ButtonDashboard } from '@/features/components/ui/Buttons/ButtonDashboard';

import type {
    Data,
    ArticlesDB,
} from '@/shared/shared-components/dataTypesFromSQL';

import './DashboardCards.scss';

export default function ArticlesDashboard() {
    const {
        getData: { data, isError, isPending, refetch },
    } = useGetData('articles');

    const content = data
        ? (data as Data).map((el, i) => {
              return (
                  <div key={el.id} className="cards-wrapper">
                      <ArticleCard data={el as ArticlesDB} />
                      <div className="cards-wrapper-btn">
                          <ButtonDashboard text="Change" type="mini" />
                          <ButtonDashboard
                              text="Delete"
                              type="mini"
                              color="red"
                          />
                      </div>
                  </div>
              );
          })
        : null;

    return <>{content}</>;
}
