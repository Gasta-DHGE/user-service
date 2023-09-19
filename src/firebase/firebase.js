import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

const serviceAccount = {
  type: 'service_account',
  project_id: 'gastas-4b583',
  private_key_id: 'ac063aead4c0daaebab744a3af97874b674d892b',
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCoeroJF5BhskSJ\n5L2N46VxYO4m4C94Y8NEG2anyc71E5b1GeuLMBAr/60+azrZCnU9KRt5TUGaHpfc\niI2LMkC1lCWCVvjzYKndMmhDyJMoj9lbMxB5rGNSjYxRsU9VQK7rZvqVu0nByn9t\nCeB31RjcB2bUQdzd+Ms3ymUKzxs5kPadmfNSXGqMq51flyFCWNvpBo87ogjGUUle\nnimIrg5DT887KnTJAZRur0Kcoe01h0freJHrkQK8BXNkALFlWBZDask/AOJODWaA\n9Mv4HXeVSf88ZSvI0AbEfxQI+QtdpTkCdE0ffeBestoeGuY1L8sOiL3wGBtjTYDr\nz+/8Xo09AgMBAAECggEAJgy5kS4aNIY/Rmk7ihz8k1OR1YPSFL1rLymFEKXaMK1A\n7Y/yC1hKfrVamfs7qiLbgXmUM9wH0dfQ8kSAuwwZYyjXI82iocyV8FffBlf5LDL4\noskwklolgFJpe1WxFg7qsk1qkIBg0vx5tNWDNW0SFTcyuQM674Kt2qbCFSPbAS/m\n6VQduAV/qBCaoe2nogcojNEcaGuTrmGKw1pEy1Ynvv1NhCe4y+9+w7Jcac5cX5dx\nSBnVQbEBO/M9P+wX6izNTCiCqGr/4PfoWhbcxPk0PzeJlC3zu1Kn6tuBHKhhdB+e\n8PLQsnbkINt+NjTNLXlQ3nQWf9DY+9OBdm/vgskRIQKBgQDihmdLch9OOoy292af\nA/cWWwyROZczlyOBRQwPfLJ6DS1y0dTVVLfBQt0zaBCS7C22Ztl6InCjaEpn7Vfo\n9rYldVarxouLp8RKjhYLAhL+8U8pvffY5ufsGPeaK43ZJPmEOQK2T6JuWONKPvx5\nIwBbeUQK/nxPTx6y8SkqRoFxNQKBgQC+Zs+9BtcEY/c+x++WMQza4ZMX+kJi24xW\nSw3sFJ1HbnMXLzchcModjvoh85Klk9AZ2qIUNqz04zGfovu87PN71PupXOTtjw+B\n7T7EWp5MJcp+rBRje2LDoIWFqHd95oe2OtvPjkKW2brA6UnrT4sd4VH3SE7eEoxs\nbg/HKwj06QKBgGciJjlVVid5xMMw1IoldgO5pHkiLVMRxtp+I0WR0nh7M2wJWMtf\n7OGSnb9f69vYp99Z6D4RHBNp0iaLCvFIEhnv2GwQ00vcMCR5mFOeuCNWnmI02Xjp\neEIoA+MvXT+189xdUHzMuPlggus0ziIg63K6PV58CwDY1vNFlSZoP1rZAoGAdEhk\nDQTVYpgO0yfWWfrA6Bil9hngW3HMZpNWAF2ipJJ+9aTfXav9tEmy1/NjF36LtI6D\nOCcgQDtU/jLS3dI07ebof8n9AlzB0s7q646QaN8XqX88wHkFm4Y4paV6vMiDD7co\nsb0nS+vTk6emfnDI/Mm0fnqJuDTJ0BrzxeaxhKkCgYBoLZlgIfQnQH3uBFVBWjXm\n1GCmrPEl+ZfvXls1mh3kxSHpPmjLHLkQXxALxX3IwjTpMOReV76A7PGd7mW4QpEL\ngOFsxepfiIY8Si5mzBW6X7RFs4X/qZGpdID0qe8nwMpQ5niitaj3jq5GhMT9KmRt\nDmB1eklx3ztokjP+f+geEg==\n-----END PRIVATE KEY-----\n',
  client_email: 'firebase-adminsdk-o3j2v@gastas-4b583.iam.gserviceaccount.com',
  client_id: '112082548364813800459',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-o3j2v%40gastas-4b583.iam.gserviceaccount.com',
  universe_domain: 'googleapis.com'
};

initializeApp({
  credential: cert(serviceAccount)
});

export const firestore = getFirestore();

export const auth = getAuth();
