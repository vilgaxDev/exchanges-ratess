/**
 * utils.test.ts
 * Test for api utility functions.
 */

// Utils
import {capitalize, createActionKey, createReducerKey} from 'api/utils';

// Constants
const CAPITALIZE_EXAMPLES = {
  aBcDeF: 'ABcDeF',
  AbCdEf: 'AbCdEf',
  abcdef: 'Abcdef',
  ABCDEF: 'ABCDEF',
  a_b_c_d_e_f: 'A_b_c_d_e_f',
  A_B_C_D_E_F: 'A_B_C_D_E_F',
  '1_a_b_c_d_e_f': '1_a_b_c_d_e_f',
  '1_A_B_C_D_E_F': '1_A_B_C_D_E_F',
  '1abcdef': '1abcdef',
  '1ABCDEF': '1ABCDEF',
};

const CREATE_ACTION_KEY_EXAMPLES = {
  aBcDeF: 'Abcdef',
  AbCdEf: 'Abcdef',
  abcdef: 'Abcdef',
  ABCDEF: 'Abcdef',
  a_b_c_d_e_f: 'ABCDEF',
  A_B_C_D_E_F: 'ABCDEF',
  ab_cd_ef: 'AbCdEf',
  AB_CD_EF: 'AbCdEf',
  '1_a_b_c_d_e_f': '1ABCDEF',
  '1_A_B_C_D_E_F': '1ABCDEF',
  '1_ab_cd_ef': '1AbCdEf',
  '1_AB_CD_EF': '1AbCdEf',
  '1abcdef': '1abcdef',
  '1ABCDEF': '1abcdef',
};

const CREATE_REDUCER_KEY_EXAMPLES = {
  aBcDeF: 'abcdef',
  AbCdEf: 'abcdef',
  abcdef: 'abcdef',
  ABCDEF: 'abcdef',
  a_b_c_d_e_f: 'aBCDEF',
  A_B_C_D_E_F: 'aBCDEF',
  ab_cd_ef: 'abCdEf',
  AB_CD_EF: 'abCdEf',
  '1_a_b_c_d_e_f': '1ABCDEF',
  '1_A_B_C_D_E_F': '1ABCDEF',
  '1_ab_cd_ef': '1AbCdEf',
  '1_AB_CD_EF': '1AbCdEf',
  '1abcdef': '1abcdef',
  '1ABCDEF': '1abcdef',
};

describe('utils', () => {
  it('should capitalize correctly', () => {
    Object.entries(CAPITALIZE_EXAMPLES).forEach(([key, value]) => {
      const result = capitalize(key);
      expect(result).toEqual(value);
    });
  });
  it('should create action key correctly', () => {
    Object.entries(CREATE_ACTION_KEY_EXAMPLES).forEach(([key, value]) => {
      const result = createActionKey(key);
      expect(result).toEqual(value);
    });
  });
  it('should create reducer key correctly', () => {
    Object.entries(CREATE_REDUCER_KEY_EXAMPLES).forEach(([key, value]) => {
      const result = createReducerKey(key);
      expect(result).toEqual(value);
    });
  })
});
