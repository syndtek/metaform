// Copyright (c) 2022 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* eslint-disable no-unused-vars */

import { IGetTitleQueryParams } from '../typings/DatabaseTypes';
import QueryBuilderBase from '../core/QueryBuilderBase';
import INCLUDE_RESOURCES from '../enums/INCLUDED_RESOURCES';
import DESCRIPTION_TYPE from '../enums/DESCRIPTION_TYPE';
import PLAYLIST_TYPE from '../enums/PLAYLIST_TYPE';

export interface IGetTitleQueryBuilder extends IGetTitleQueryParams {
  build(): string;
  setId(id?: number): IGetTitleQueryBuilder;
  setCode(code?: string): IGetTitleQueryBuilder;
  setFilter(keys?: string[]): IGetTitleQueryBuilder;
  setRemove(keys?: string[]): IGetTitleQueryBuilder;
  setInclude(resources?: INCLUDE_RESOURCES[]): IGetTitleQueryBuilder;
  setTorrentId(id?: number): IGetTitleQueryBuilder;
  setDescriptionType(type?: DESCRIPTION_TYPE): IGetTitleQueryBuilder;
  setPlaylistType(type?: PLAYLIST_TYPE): IGetTitleQueryBuilder;
}

export default class GetTitleQueryBuilder
  extends QueryBuilderBase
  implements IGetTitleQueryBuilder
{
  setId(id?: number): IGetTitleQueryBuilder {
    super.addParam('id', id);
    return this;
  }

  setCode(code?: string): IGetTitleQueryBuilder {
    super.addParam('code', code);
    return this;
  }

  setFilter(keys?: string[]): IGetTitleQueryBuilder {
    super.addParam('filter', keys);
    return this;
  }

  setRemove(keys?: string[]): IGetTitleQueryBuilder {
    super.addParam('remove', keys);
    return this;
  }

  setInclude(keys?: INCLUDE_RESOURCES[]): IGetTitleQueryBuilder {
    super.addParam('include', keys);
    return this;
  }

  setTorrentId(id?: number): IGetTitleQueryBuilder {
    super.addParam('torrent_id', id);
    return this;
  }

  setDescriptionType(type?: DESCRIPTION_TYPE): IGetTitleQueryBuilder {
    super.addParam('description_type', type);
    return this;
  }

  setPlaylistType(type?: PLAYLIST_TYPE): IGetTitleQueryBuilder {
    super.addParam('playlist_type', type);
    return this;
  }

  build() {
    return super.build();
  }
}