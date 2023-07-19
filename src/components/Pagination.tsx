/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useSearchParams } from 'react-router-dom';
import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { ArrowButton } from './ArrowButton';
import { useDiviceSize } from '../utils/useDeviceSize/useDiviceSize';

type Props = {
  paginationLength: number
};

export const Pagination:React.FC<Props> = ({ paginationLength }) => {
  const { buttonWidth, paginationLimit } = useDiviceSize();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const perPage = searchParams.get('perPage');
  const paginationGap = 8;
  const step = buttonWidth + paginationGap;
  const lastVisiblePage = useRef(+page);
  const firstVisiblePage = useRef(0);
  const [shift, setShift] = useState(0);

  const showLastItem = lastVisiblePage.current !== paginationLength
  && paginationLength > paginationLimit;

  useEffect(() => {
    if (paginationLimit) {
      if (+page > paginationLimit && +page > lastVisiblePage.current) {
        setShift((+page - paginationLimit) * step);
        lastVisiblePage.current = +page;
        firstVisiblePage.current
         = lastVisiblePage.current - paginationLimit + 1;
      }

      if (+page < firstVisiblePage.current) {
        setShift(prev => prev - step);
        lastVisiblePage.current -= 1;
        firstVisiblePage.current -= 1;
      }
    }
  }, [page]);

  useEffect(() => {
    if (+page === 1 && paginationLimit) {
      setShift(0);
      lastVisiblePage.current = +page;
      firstVisiblePage.current = 0;
    }

    if (+page > paginationLimit && paginationLimit) {
      setShift((+page - paginationLimit) * step);
    }
  }, [perPage]);

  const handleChangePage = (num: number) => {
    searchParams.set('page', `${num}`);
    setSearchParams(searchParams);
  };

  const createPagination = () => {
    const result = [];

    for (let i = 0; i < (showLastItem
      ? paginationLength - 1 : paginationLength); i += 1) {
      result.push(
        <li
          key={i + 1}
          className={classnames(
            'pagination__item',
            { 'is-active': +page === i + 1 },
          )}
          onClick={() => handleChangePage(i + 1)}
          style={{ left: -shift }}
        >
          {i + 1}
        </li>,
      );
    }

    return result;
  };

  const paginationList = createPagination();

  return (
    <section
      className="pagination"
      style={{ left: showLastItem ? -step / 2 : 0 }}
    >
      <ArrowButton
        type="left"
        stop={+page === 1}
        onChangePosition={() => handleChangePage(+page - 1)}
      />
      <ul
        className="pagination__list"
      >
        {paginationList}
      </ul>
      <div
        className="right-button"
        style={{ left: showLastItem ? step : 0 }}
      >
        {showLastItem && paginationLimit !== 0
      && (
        <button
          type="button"
          className="pagination__item"
          style={{
            position: 'absolute',
            left: -step,
          }}
          onClick={() => handleChangePage(paginationLength)}
        >
          {+page !== paginationLength - 1 && '...'}
          {paginationLength}
        </button>
      )}
        <ArrowButton
          type="right"
          stop={+page === paginationLength}
          onChangePosition={() => handleChangePage(+page + 1)}
        />
      </div>

    </section>

  );
};