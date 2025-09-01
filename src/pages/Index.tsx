import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from "@/components/ui/icon";

const Index = () => {
  const stats = [
    { title: "Активные рейсы", value: "148", change: "+12%", icon: "Truck", color: "text-primary" },
    { title: "Доходы за день", value: "₽52,118", change: "+8.2%", icon: "DollarSign", color: "text-green-600" },
    { title: "Водители на линии", value: "67", change: "+3", icon: "Users", color: "text-blue-600" },
    { title: "Завершенные заказы", value: "324", change: "+15%", icon: "CheckCircle", color: "text-green-500" }
  ];

  const routes = [
    {
      id: "№50",
      date: "01.09.2025 12:40",
      orderType: "ЗАЯВКА",
      orderNumber: "№671701",
      orderDate: "01.09.2025",
      client: "ЗАКАЗЧИК",
      clientDetail: "УТЛ 1840",
      clientCompany: "ООО \"ДОБРОЛЮБ\"",
      contractor: "ПЕРЕВОЗЧИК", 
      contractorDetail: "Авт-т:",
      contractorCompany: "ИП Балабан Д.С.",
      contractorInn: "263015788593",
      driver: "ВОДИТЕЛЬ",
      driverDetail: "ЗИЛ",
      driverCompany: "Малков Дмитрий Николаевич",
      driverPhone: "Е306АА126",
      load: "ЭПЛ 624.82",
      balance: "Баланс: 0",
      payment: "Оплата по ссылке",
      paymentDays: "3 дня",
      paymentRemain: "Остаток 478 000",
      limit: "Лимит: 500 000",
      comment: "Заказчик:",
      contractorComment: "Перевозчик:",
      cargo: "ГРУЗ",
      cargoDetail: "Без автотранспортного диспетчерского",
      insurance: "Страховка: 48",
      additional: "Доп. расходы:",
      totalAmount: "115 562",
      email: "test@email.ru"
    },
    {
      id: "№49", 
      date: "01.09.2025 11:45",
      orderType: "ЗАЯВКА",
      orderNumber: "№671700",
      orderDate: "01.09.2025",
      client: "ЗАКАЗЧИК",
      clientDetail: "УТЛ 1939",
      clientCompany: "ООО \"МегаЛогистик\"",
      contractor: "ПЕРЕВОЗЧИК",
      contractorDetail: "Авт-т:",
      contractorCompany: "ООО \"АЛЬЯНС-ТРЕЙД\"",
      contractorInn: "580012170",
      driver: "ВОДИТЕЛЬ",
      driverDetail: "КамАЗ",
      driverCompany: "Алексов Дмитрий Николаевич",
      driverPhone: "Т386АА138",
      load: "ЭПЛ 2000.20",
      balance: "на выгрузке",
      payment: "Оплата 3900 без НДС",
      paymentDays: "1 день",
      paymentRemain: "Остаток 647 000", 
      limit: "Лимит: 500 000",
      comment: "Заказчик:",
      contractorComment: "Перевозчик:",
      cargo: "ГРУЗ",
      cargoDetail: "Промышленное оборудование",
      insurance: "Страховка: 46",
      additional: "Доп. расходы:",
      totalAmount: "8 967 289 34 79",
      email: "Alexsov@gmail.ru"
    },
    {
      id: "№48",
      date: "07.09.2025",
      orderType: "ЗАЯВКА", 
      orderNumber: "№671699",
      orderDate: "07.09.2025",
      client: "ЗАКАЗЧИК",
      clientDetail: "Счет Готов",
      clientCompany: "ИП Сидоров",
      contractor: "ПЕРЕВОЗЧИК",
      contractorDetail: "для назначения",
      contractorCompany: "21.05",
      contractorInn: "",
      driver: "ВОДИТЕЛЬ",
      driverDetail: "Владимир",
      driverCompany: "Горфаков Владимир Павлович",
      driverPhone: "Т386АА138",
      load: "0",
      balance: "",
      payment: "Проверка Дон./Заказчик",
      paymentDays: "Проверка Дон./Перевозчик",
      paymentRemain: "",
      limit: "",
      comment: "Заказчик:",
      contractorComment: "Перевозчик:",
      cargo: "",
      cargoDetail: "",
      insurance: "",
      additional: "",
      totalAmount: "",
      email: "yuratest@mail.ru"
    }
  ];

  const drivers = [
    { name: "Иванов Александр", phone: "+7 905 123-45-67", rating: 4.8, status: "Занят", routes: 12 },
    { name: "Петров Владимир", phone: "+7 916 234-56-78", rating: 4.9, status: "Свободен", routes: 8 },
    { name: "Козлов Сергей", phone: "+7 923 345-67-89", rating: 4.7, status: "В рейсе", routes: 15 }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-[95%] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Транспортная CRM</h1>
            <p className="text-muted-foreground">Управление логистикой в реальном времени</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Icon name="Download" size={16} />
              Экспорт
            </Button>
            <Button className="flex items-center gap-2 bg-primary">
              <Icon name="Plus" size={16} />
              Добавить рейс
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon name={stat.icon} size={20} className={stat.color} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600 font-medium">{stat.change} за неделю</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="routes" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="routes">Управление рейсами</TabsTrigger>
            <TabsTrigger value="drivers">База водителей</TabsTrigger>
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
          </TabsList>

          <TabsContent value="routes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Route" size={24} />
                  Активные рейсы
                </CardTitle>
                <CardDescription>
                  Отслеживание грузов и рейсов в реальном времени
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">ID</TableHead>
                        <TableHead className="w-24">Дата</TableHead>
                        <TableHead className="min-w-[200px]">Заказчик</TableHead>
                        <TableHead className="min-w-[200px]">Перевозчик</TableHead>
                        <TableHead className="min-w-[200px]">Водитель</TableHead>
                        <TableHead className="w-24">Груз</TableHead>
                        <TableHead className="w-32">Оплата</TableHead>
                        <TableHead className="w-32">Почта</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {routes.map((route) => (
                        <TableRow key={route.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <input type="checkbox" className="w-4 h-4 accent-primary" />
                              <span>{route.id}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-xs">
                            <div className="space-y-1">
                              <div>{route.date}</div>
                              <Badge variant="outline" className="text-xs">{route.orderType}</Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="text-sm font-medium text-blue-600">{route.client}</div>
                              <div className="text-xs text-muted-foreground">{route.clientDetail}</div>
                              <div className="text-xs">{route.clientCompany}</div>
                              <div className="text-xs text-muted-foreground">{route.orderNumber}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="text-sm font-medium text-red-600">{route.contractor}</div>
                              <div className="text-xs text-muted-foreground">{route.contractorDetail}</div>
                              <div className="text-xs">{route.contractorCompany}</div>
                              <div className="text-xs text-muted-foreground">{route.contractorInn}</div>
                              <div className="text-xs">{route.paymentRemain}</div>
                              <div className="text-xs text-muted-foreground">{route.limit}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="text-sm font-medium text-red-600">{route.driver}</div>
                              <div className="text-xs text-muted-foreground">{route.driverDetail}</div>
                              <div className="text-xs">{route.driverCompany}</div>
                              <div className="text-xs text-muted-foreground">{route.driverPhone}</div>
                              <div className="text-xs">{route.load}</div>
                              <div className="text-xs text-muted-foreground">{route.balance}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="text-sm font-medium text-green-600">{route.cargo}</div>
                              <div className="text-xs">{route.cargoDetail}</div>
                              <div className="text-xs text-muted-foreground">{route.insurance}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="text-xs">{route.payment}</div>
                              <div className="text-xs text-muted-foreground">{route.paymentDays}</div>
                              <div className="text-xs">{route.comment}</div>
                              <div className="text-xs text-muted-foreground">{route.contractorComment}</div>
                              <div className="text-xs font-medium">{route.totalAmount}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-xs">
                              <Icon name="Mail" size={16} className="text-green-600 mb-1" />
                              <div>{route.email}</div>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="drivers" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {drivers.map((driver, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="User" size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{driver.name}</CardTitle>
                        <CardDescription>{driver.phone}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Статус</span>
                        <Badge
                          variant={driver.status === "Свободен" ? "outline" : "default"}
                          className={
                            driver.status === "Свободен" ? "bg-green-100 text-green-800" :
                            driver.status === "В рейсе" ? "bg-primary text-white" :
                            "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {driver.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Рейтинг</span>
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                          <span className="font-medium">{driver.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Рейсов в месяц</span>
                        <span className="font-medium">{driver.routes}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={24} />
                    Динамика доходов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between gap-2 p-4">
                    {[40, 60, 45, 80, 65, 90, 75].map((height, index) => (
                      <div
                        key={index}
                        className="bg-primary rounded-t-lg flex-1 transition-all hover:bg-primary/80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>Пн</span>
                    <span>Вт</span>
                    <span>Ср</span>
                    <span>Чт</span>
                    <span>Пт</span>
                    <span>Сб</span>
                    <span>Вс</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="PieChart" size={24} />
                    Статистика рейсов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span>В пути</span>
                      </div>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>Загрузка</span>
                      </div>
                      <span className="font-medium">25%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Завершены</span>
                      </div>
                      <span className="font-medium">30%</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary via-yellow-500 to-green-500"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;