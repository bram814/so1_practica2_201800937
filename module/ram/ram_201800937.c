#include <linux/module.h>
#include <linux/kernel.h>   /*para usar KERN_INFO*/
#include <linux/init.h>     /* Header para los macros module_init y module_exit */
#include <linux/proc_fs.h>  /* Header necesario porque se usara proc_fs */
#include <asm/uaccess.h>	/* for copy_from_user */
#include <linux/seq_file.h> /* Header para usar la lib seq_file y manejar el archivo en /proc*/

MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("Práctica 2, Laboratorio Sistemas Operativos 1 - Sección N ");
MODULE_AUTHOR("José Abraham Solórzano Herrera");

/* Función que muestra el contenido del comando CAT */
static int write_file(struct seq_file *archivo, void *v)
{   

    seq_printf(archivo, "{\"data\":\"");
    seq_printf(archivo, "*********************************************\n");
    seq_printf(archivo, "*********************************************\n");
    seq_printf(archivo, "**    LABORATORIO SISTEMAS OPERATIVOS 1    **\n");
    seq_printf(archivo, "**       EJEMPLO CREACION DE MODULOS       **\n");
    seq_printf(archivo, "**     José Abraham Solórzano Herrera      **\n");
    seq_printf(archivo, "*********************************************\n");
    seq_printf(archivo, "*********************************************\n");
    seq_printf(archivo, "\"}");
    return 0;
}

/* Está función se encarga de ejecutarse cada ver que se lea el archivo con el comando CAT */
static int al_abrir(struct inode *inode, struct file *file)
{
    return single_open(file, write_file, NULL);
}

/* Si el kernel es 5.6 o mayor se usa la estructura proc_ops */
static struct proc_ops operaciones =
{
    .proc_open = al_abrir,
    .proc_read = seq_read
};

/* Está función ejecuta al insertar el módulo en el kernel con el comando insmod */
static int _insert(void)
{
    proc_create("ram_201800937", 0, NULL, &operaciones);
    printk(KERN_INFO "Carnet: 201800937\n");
    return 0;
}

/* Está Función se ejecuta al remover el modulo del kernel con el comadno rmmod */
static void _remove(void)
{
    remove_proc_entry("ram_201800937", NULL);
    printk(KERN_INFO "Laboratorio Sistemas Operativos 1\n");
}

module_init(_insert);
module_exit(_remove);