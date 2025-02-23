export interface SftpSyncConfig {
  host: string;
  port?: number;
  username: string;
  password?: string;
  privateKey?: string;
  passphrase?: string;
  agent?: string;
  localDir: string;
  remoteDir: string;
}

export interface SftpSyncOptions {
  dryRun?: boolean;
  exclude?: string[];
  excludeMode?: 'ignore'|'remove';
  forceUpload?: boolean;
  concurrency?: number;
  keepExtraFiles?: boolean;
}
