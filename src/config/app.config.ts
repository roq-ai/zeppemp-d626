interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Manager', 'Member', 'Employee'],
  tenantName: 'Organization',
  applicationName: 'Zeppemp',
  addOns: ['chat', 'notifications', 'file'],
};
