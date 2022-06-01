const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
                  username: 'ajolonauta4',
                  mission: 'Node'
        },
      });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();


(async function main() {
    try {

        const record1 = await prisma.newmodel.upsert({
            where: { name: 'perro1' },
            update: {},
            create: {
              name: 'perro1',
              lang: 'english',
              missionCommander: 'Diego',
            },
          });

          const record2 = await prisma.newmodel.upsert({
            where: { name: 'Master2' },
            update: {},
            create: {
              name: 'Master2',
              lang: 'french',
              missionCommander: 'Iker',
            },
          });


          const record3 = await prisma.newmodel.upsert({
            where: { name: 'Master3' },
            update: {},
            create: {
              name: 'Master3',
              lang: 'German',
              missionCommander: 'Jose',
            },
          });
    
  
      console.log('Create new register too');
    } catch(e) {
      console.error(e);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  })();


