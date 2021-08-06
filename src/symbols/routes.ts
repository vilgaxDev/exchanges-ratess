/**
 * routes.ts
 * Routes for symbol.
 */

// Utils
import {handleFetchRequest} from 'common/utils';

export const getSymbolsAll = () => handleFetchRequest('/symbols');
